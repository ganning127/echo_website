import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { HeartConnectionSection } from "@/components/Sections/HeartConnectionSection";
import { ComposerNoteSection } from "@/components/Sections/ComposerNoteSection";
import { MusicPlayerSection } from "@/components/Sections/MusicPlayerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECHO Music | Heart-Healthy Songs & Soundtracks",
  description:
    "Jump into ECHO’s music — songs and soundtracks that teach kids about heart health, movement, mindfulness, and rest through melody.",
  keywords: [
    "ECHO music",
    "heart health songs",
    "educational music for kids",
    "cardiovascular wellness through music",
  ],
};

export default function Music() {
  return (
    <section className="bg-[#fff6e9]">
      <NavBar />
      <div className="mt-10">
        <Image
          className="w-md justify-self-center"
          src="/Sign.png"
          alt="music sign"
          width="300"
          height="100"
        />
      </div>
      {/* Music Player Section */}
      <MusicPlayerSection />
      {/* Composer's Note*/}
      <ComposerNoteSection />
      {/* Infograpic*/}
      <HeartConnectionSection />
      <Footer />
    </section>
  );
}
