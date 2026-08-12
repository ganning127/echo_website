// app/wishing-well/page.tsx
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { WishingWell } from "@/components/KlaviyoForms/wishing-well";
import { HeroSection } from "@/components/Sections/WishingWell/Hero";
import { GallerySection } from "@/components/Sections/WishingWell/Gallery";
import { ViewInstructionsSection } from "@/components/Sections/WishingWell/ViewInstructions";
import { ConclusionSection } from "@/components/Sections/WishingWell/Conclusion";
import { WellnessGoalSection } from "@/components/Sections/WishingWell/wellness-goal";
import FAQSection from "@/components/Sections/WishingWell/Steps";

export const metadata: Metadata = {
  title: "The ECHO Wishing Well: Save Your Spot With A Heart!",
  description:
    "Receive a wish by picking up a Save Your Spot With a Heart Bookmark! Friends of Early Cardiovascular Health Outreach have folded origami heart bookmarks for the library.",
  keywords: [
    "Echo Wishing Well",
    "Heart Health",
    "Kids Program",
    "Education",
    "Health Program",
  ],
};

export default function WishingWellProgramPage() {
  return (
    <>
      <nav className="bg-paper sticky top-0 z-50">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="bg-origami pt-12 pb-10">
          <HeroSection />
          <WellnessGoalSection />
          <FAQSection />
          <ViewInstructionsSection />
          <ConclusionSection />
        </main>
      </Suspense>
      <Footer />
    </>
  );
}