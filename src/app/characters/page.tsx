import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersMain } from "@/components/Sections/CharactersMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
};
export default function Characters() {
  return (
    <>
      <nav className="bg-[#DBECF1] w-full">
        <NavBar />
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <CharactersMain />
      </Suspense>

      <Footer />
    </>
  );
}
