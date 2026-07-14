import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { WishingWell } from "@/components/KlaviyoForms/wishing-well";

export const metadata: Metadata = {
  title: "Wishing Well: Save Your Spot With A Heart! ",
  description:
    "Receive a wish by picking up a Save Your Spot With a Heart Bookmark! Friends of Early Cardiovascular Health Outreach have folded origami heart bookmarks for the library. ",
  keywords: [
    "Echo Wishing Well",
    "Heart Health",
    "Kids Program",
    "Education",
    "Health Program",
  ],
};

export default function WishingWellPage() {
  return (
    <>
      <nav className="bg-paper sticky top-0 z-50">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <main className="bg-paper pb-10">
      <WishingWell/>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}
