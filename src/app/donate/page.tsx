import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import ZeffyDonationForm from "@/components/Donate/ZeffyDonationForm";

export const metadata: Metadata = {
  title: "Donate to ECHO",
  description: "Donate to support ECHO",
  keywords: [
    "ECHO mission",
    "early cardiovascular outreach",
    "health education values",
    "donations for nonprofits",
  ],
};
export default function Donate() {
  return (
    <div className="bg-[#f0f0ff] min-h-screen">
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="mt-5 text-5xl text-center mx-auto">Donate to ECHO</h1>
        <ZeffyDonationForm />
      </Suspense>

      <Footer />
    </div>
  );
}
