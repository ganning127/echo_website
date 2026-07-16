// app/wishing-well/page.tsx
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { WishingWell } from "@/components/KlaviyoForms/wishing-well";

export const metadata: Metadata = {
  title: "Wishing Well: Save Your Spot With A Heart!",
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

export default function WishingWellCountPage() {
  return (
    <>
      <nav className="bg-paper sticky top-0 z-50">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="bg-origami pt-12 pb-10">
          {/* Hero */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#013161]">
                See Your Impact ECHO!
              </h1>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Now that you’ve chosen your very own Save Your Spot With A Heart bookmark,
 fill out this form to be added to the ECHO Wishing Well community.
              </p>
            </div>
            
          {/* Klaviyo form */}
          <WishingWell />
          </section>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}