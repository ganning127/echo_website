"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import activities from "@/lib/activities.json";
import { useEffect, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const actualParams = React.use(params); // ✅ unwrap the promise
  const [activity, setActivity] = useState<null | (typeof activities)[0]>(null);

  useEffect(() => {
    const found = activities.find((a) => a.slug === actualParams.slug);
    if (!found) {
      router.push("/404");
    } else {
      setActivity(found);
    }
  }, [actualParams.slug, router]);

  if (!activity) return null;

  return (
    <section className="w-full bg-[#B77372]">
      <NavBar />
      <div className="w-5/6 m-auto">
        <Button className="mt-3 bg-[#7C2D36] hover:bg-[#013161] p-5">
          <Link
            href="/activities"
            className=" relative text-[3vw] sm:text-[1vw] inline-block text-white rounded font-heading transition"
          >
            ← All Activities
          </Link>
        </Button>
      </div>
      <div className="pt-5 pb-5 w-5/6 m-auto text-center">
        <h1 className="text-[8vw] sm:text-[4vw] text-black mb-4 w-5/6 md:w-6/6 m-auto">
          {activity.title}
        </h1>
        <p className="pb-3 text-black text-[4vw] sm:text-[1.5vw] md:text-[2vw] w-4/6 md:w-5/6 m-auto">
          {activity.description}
        </p>
        <Button className="bg-[#7C2D36] hover:bg-[#013161] mb-10">
          <Link
            href={activity.link}
            className=" inline-block text-white rounded font-heading transition"
          >
            Download Activity
          </Link>
        </Button>
        <Image
          src={activity.preview}
          alt={activity.title}
          width={800}
          height={400}
          className="rounded mb-6 m-auto z-20 relative"
        />
      </div>
      <div className="pb-10">
        <Image
          className="absolute md:mt-40 left-0 top-30 w-auto visible z-0 h-[60vw] lg:h-[40vw] max-h-[500px]"
          src="/Activities Window Left.png"
          alt="window"
          width="200"
          height="500"
        />

        <Image
          className="absolute md:mt-40 right-0 top-30 w-auto visible z-0 h-[60vw] lg:h-[40vw] max-h-[500px]"
          src="/Activities window Right.png"
          alt="window"
          width="200"
          height="500"
        />
      </div>
      <div className="relative">
        <Image
          className="absolute left-0 z-10 bottom-0 w-auto visible h-[40vw] md:h-[25vw] max-h-[500px]"
          src="/Activities Machine 1.png"
          alt="Machine"
          width="200"
          height="500"
        />
        <Image
          className="absolute right-0 z-10 bottom-8 w-auto visible h-[20vw] md:h-[15vw] max-h-[500px]"
          src="/Activities Machine 2.png"
          alt="Machine"
          width="200"
          height="500"
        />
        <div className="h-[10px] bg-[#7C2D36]"></div>
        <Image
          className="relative object-contain w-full bg-[#9C6363]"
          src="/Activities floor pattern.png"
          alt="door"
          width="800"
          height="100"
        />
      </div>
      <Footer />
    </section>
  );
}
