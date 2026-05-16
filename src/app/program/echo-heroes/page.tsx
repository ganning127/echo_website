import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { BPACSection } from "@/components/Sections/BPACsection";
import { HeroSection } from "@/components/Sections/BPACHeroSection"
import { ForwardThinkingSection } from "@/components/Sections/BPACForwardThinking";
import { EducationSection } from "@/components/Sections/BPACEducation";

export const metadata: Metadata = {
  title: "Echo Heroes | Blood Pressure Awareness Education Program",
  description:
    "Echo Heroes empowers students and communities to understand blood pressure through our Blood Pressure Awareness Cards (BPAC) program — building a forward-thinking generation of health advocates.",
  keywords: [
    "Echo Heroes",
    "Blood Pressure Awareness Cards",
    "BPAC",
    "blood pressure education",
    "health education program",
    "cardiovascular health for kids",
    "blood pressure awareness",
    "school health program",
    "heart health education",
    "community health awareness",
    "hypertension education",
    "student health program",
    "preventive health education",
    "blood pressure monitoring",
    "youth health advocates",
  ],
};

export default function EchoExplorers() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Background — fixed so it doesn't scroll */}
        <div className="fixed inset-0 bg-[#19345f] -z-10">
          <Image
            src="/Echo Heroes Background.webp"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <HeroSection />
          <BPACSection />
          <ForwardThinkingSection />
          <EducationSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
