import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { AboutTabsSection } from "@/components/Sections/AboutTabsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <NavBar />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutTabsSection />
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}
