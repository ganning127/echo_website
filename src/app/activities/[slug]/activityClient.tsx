"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ActivityClient({
  activity,
}: {
  activity: any;
}) {
  const router = useRouter();

  if (!activity) return null;

  return (
    <section className="w-full bg-[#B77372]">
      <NavBar />

      <div className="w-5/6 m-auto lg:pt-24 pt-0">
        <Button className="mt-3 bg-[#7C2D36] hover:bg-[#013161] p-5 text-xl font-heading">
          <Link href="/activities">← All Activities</Link>
        </Button>
      </div>

      <div className="pt-5 pb-5 w-5/6 m-auto text-center">
        <h1 className="text-[8vw] sm:text-[4vw] text-black mb-4">
          {activity.title}
        </h1>

        <p className="pb-3 text-black text-[4vw] sm:text-[1.5vw] md:text-[2vw] pb-10">
          {activity.description}
        </p>

        <Image
          src={activity.preview}
          alt={activity.title}
          width={800}
          height={400}
          className="rounded mb-6 m-auto z-20 relative"
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Button className="bg-[#7C2D36] hover:bg-[#013161] text-xl font-heading">
          <Link href={activity.link}>
            {activity.downloadLabel ?? "Download Activity"}
          </Link>
        </Button>

        {"secondaryLink" in activity && activity.secondaryLink && (
          <Button className="bg-[#7C2D36] hover:bg-[#013161] text-xl font-heading">
            <Link href={activity.secondaryLink}>
              {activity.secondaryLabel ?? "Download Activity"}
            </Link>
          </Button>
        )}
      </div>

      <Footer />
    </section>
  );
}