import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersMain } from "@/components/Sections/CharactersMain";
import { CharactersDetails } from "@/components/Sections/CharactersDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
};
export default function About() {
  return (
    <>
      <NavBar />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <CharactersDetails />
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}
