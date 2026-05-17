import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { TimelineSection } from "@/components/Explorers Timeline/explorersTimeline";
import FAQSection from "@/components/Echo Explorers FAQ/FAQ";
import { HeroSection } from "@/components/Sections/EchoExplorers/hero";
import { ProgramDescriptionSection } from "@/components/Sections/EchoExplorers/ProgramDescription";
import { ScheduleSection } from "@/components/Sections/EchoExplorers/Schedule";
import { ReachOutSection } from "@/components/Sections/EchoExplorers/ReachOut";
import { DonationSection } from "@/components/Sections/EchoExplorers/Donation";
import { GallerySection } from "@/components/Sections/EchoExplorers/Gallery";

export const metadata: Metadata = {
  title: "Echo Explorers Program: Heart-healthy habits for elementary students",
  description:
    "Learn about the 10-week Echo Explorers program that teaches heart-healthy habits through interactive learning, games, and creative activities",
  keywords: [
    "Echo Explorers",
    "Heart Health",
    "Kids Program",
    "Education",
    "Health Program",
  ],
};

export default function EchoExplorers() {
  return (
    <>
      <nav className="bg-paper sticky top-0 z-50">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <main className="bg-paper pb-10">
      <HeroSection/>
      <ProgramDescriptionSection/>
      <ScheduleSection/>
      <TimelineSection />
      <ReachOutSection/>
      <GallerySection/>
      <DonationSection/>
      <FAQSection/>
      <ReachOutSection/>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}
