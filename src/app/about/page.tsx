import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { AboutTabsSection } from "@/components/Sections/AboutTabsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ECHO | Our Mission & Values",
  description:
    "Learn about ECHO’s mission to teach children heart-healthy habits through mindfulness, movement, nutrition, and rest. Discover our values and approach.",
  keywords: [
    "ECHO mission",
    "early cardiovascular outreach",
    "health education values",
    "mindfulness nutrition rest movement",
  ],
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
