import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersDetails } from "@/components/Sections/CharactersDetails";
import { Metadata } from "next";
import characters from "@/lib/characters.json";

export const metadata: Metadata = {
  title: "Characters",
};

export default async function CharacterPage(props: {
  params: Promise<{ name: string }>; // params is a Promise here
}) {
  const params = await props.params; // await params
  const { name } = params;

  return (
    <>
      <nav className="bg-[#DBECF1] w-full">
        <NavBar />
      </nav>

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <CharactersDetails name={name} />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return characters.map((char) => ({
    name: char.name.toLowerCase(),
  }));
}
