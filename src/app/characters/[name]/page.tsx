import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersDetails } from "@/components/Sections/CharactersDetails";
import { Metadata } from "next";
import characters from "@/lib/characters.json";

export const metadata: Metadata = {
  title: "ECHO Characters | Meet the Heart Health Heroes",
  description:
    "Meet the ECHO characters — friendly guides in Echoville who help children understand heart health, nutrition, rest, and movement.",
  keywords: [
    "ECHO characters",
    "heart health heroes",
    "Echoville guides",
    "kids health education characters",
  ],
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

      <Suspense fallback={<div>Loading...</div>}>
        <CharactersDetails name={name} />
      </Suspense>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return characters.map((char) => ({
    name: char.name.toLowerCase(),
  }));
}
