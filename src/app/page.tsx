import { WelcomeCard } from "@/components/Cards/WelcomeCard";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Metadata } from "next";

import { FeaturedActivities } from "@/components/Sections/FeaturedActivities";
import Image from "next/image";
import { FadeInWhenVisible } from "@/components/Animation/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "ECHO | Early Cardiovascular Health Outreach",
  description:
    "Welcome to ECHOVILLE — the land inside your body! ECHO helps kids learn heart-healthy habits through mindfulness, movement, nutrition, and rest.",
  keywords: [
    "ECHO health education",
    "heart health for kids",
    "cardiovascular outreach",
    "healthy habits",
    "early cardiovascular education",
  ],
};

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="-mt-28 bg-[url(/hero.png)] h-[40vh] lg:h-[90vh] w-full bg-no-repeat bg-cover bg-center"></div>
      <div className="bg-white h-2"></div>
      <Container className="bg-[#329D3C]">
        <FadeInWhenVisible>
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="w-full md:w-1/3">
              <Image
                src="/run_img.png"
                alt="Welcome to Echoville"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 p-6">
              <WelcomeCard />
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <h2 className="text-center text-[48px] text-white mt-16">
            Featured Activities
          </h2>
          <FeaturedActivities />
        </FadeInWhenVisible>
      </Container>

      <Footer />
    </>
  );
}
