import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersDetails } from "@/components/Sections/CharactersDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
};

type PageProps = {
  params: {
    name: string;
  };
};

export default function CharacterPage({ params }: PageProps) {
  return (
    <>
      <NavBar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <CharactersDetails name={params.name} />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}
