import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { CharactersDetails } from "@/components/Sections/CharactersDetails";
import { Metadata } from "next";
import characters from "@/lib/characters.json";

export async function generateMetadata(
  { params }: { params: Promise<{ name: string }> }
): Promise<Metadata> {
  const { name } = await params;

  const character = characters.find(
    (char) => char.name.toLowerCase() === name
  );

  const displayName = character?.name ?? name;

  return {
    title: `ECHO Characters: Meet ${displayName}`,
    description:
      "Meet the ECHO characters — friendly guides in Echoville who help children understand heart health, nutrition, rest, and movement.",
    keywords: [
      "ECHO characters",
      "heart health heroes",
      "Echoville guides",
      "kids health education characters",
    ],
  };
}

export default async function CharacterPage(props: {
  params: Promise<{ name: string }>; // params is a Promise here
}) {
  const params = await props.params; // await params
  const { name } = params;

  return (
      <><nav className="bg-[#DBECF1] sticky top-0 z-50">
      <NavBar />
    </nav><div className="bg-[#DBECF1] min-h-screen lg:pt-24 pt-0">

        <Suspense fallback={<div>Loading...</div>}>
          <CharactersDetails name={name} />
        </Suspense>
        <Footer />
      </div></>
  );
}

export async function generateStaticParams() {
  return characters.map((char) => ({
    name: char.name.toLowerCase(),
  }));
}
