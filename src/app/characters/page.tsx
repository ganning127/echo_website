import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersMain } from "@/components/Sections/CharactersMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
};
export default function About() {
  return (
    <>
      <nav className="bg-[#DBECF1] w-full">
        <NavBar />
      </nav>
      
      <Container className="bg-[#DBECF1]">
        <Suspense fallback={<div>Loading...</div>}>
          <CharactersMain />
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}
