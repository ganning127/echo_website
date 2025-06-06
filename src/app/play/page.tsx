"use client";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PlayFeaturesSection } from "@/components/Sections/PlayFeaturesSection";
import { PlayNewsletterSection } from "@/components/Sections/PlayNewsletterSection";
import Image from "next/image";

export default function Play() {
  return (
    <>
      <section>
        <div>
          <NavBar />
          <Image
            className="relative md:absolute top-0 z-0 w-auto lg:mt-0 md:mt-[10%]"
            src="/PlayBanner.png"
            alt="door"
            width="1400"
            height="700"
          />
          <div className="z-10 pt-10 w-5/6 justify-self-center grid grid-cols-1 md:grid-cols-5 gap-1 lg:gap-30">
            <div className="invisible lg:visible col-span-3 md:col-span-3 lg:col-span-3 md:order-1 order-2 pb-5 mb-5"></div>
            <div className="text-[12px] col-span-3 md:col-span-2 lg:col-span-2 z-0 justify-self-center md:order-1 order-1 bg-white p-7 rounded-sm md:mb-20">
              <PlayNewsletterSection />
            </div>
          </div>
          <div className="relative">
            <PlayFeaturesSection />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
