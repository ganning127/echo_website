import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { MinuteChallengeSection } from "@/components/Sections/MinuteChallengeSection";
import { OutreachVideoSection } from "@/components/Sections/OutreachVideoSection";
import Image from "next/image";

export default function Outreach() {
  return (
    <section className="bg-[#ECCDDC]">
      <NavBar />
      {/*Curtains, lights, door */}

      <div className="">
        <Image
          className="visible md:invisible absolute left-0 top-[10%] lg:mt-[-10px] sm:mt-21 w-2/6 sm:w-2/6 lg:w-2/6 z-20"
          src="/Lights.png"
          alt="Lights"
          width="500"
          height="100"
        />
      </div>
      {/*
      <div className="">
        <Image
          className="absolute left-0 w-auto mt-20 invisible sm:visible sm:h-4/6 lg:h-6/6 max-h-[600px]"
          src="/Door.png"
          alt="door"
          width="100"
          height="100"
        />
      </div>
      */}
      {/* Sign */}
      <div className="">
        <Image
          className="invisible sm:visible absolute md:w-full justify-self-center md:top-17 lg:top-0 mt-[-2%]"
          src="/OutreachSignLights.svg"
          alt="logo"
          width="1440"
          height="329"
        />
      </div>
      <div className="">
        <Image
          className="absolute md:mt-40 right-0 top-25 sm:top-0 w-auto visible z-0 h-1/4 sm:h-3/6 lg:h-4/6 max-h-[400px]"
          src="/Curtains.png"
          alt="curtains"
          width="200"
          height="500"
        />
      </div>

      <div className="relative m-auto text-[7vw] text-[#013161] text-center visible sm:invisible justify-self-center sm:w-[1px] w-[70%] mt-5 z-20 rounded-md">
        <h1>Outreach</h1>
      </div>
      {/* 8 minute call video section*/}
      <OutreachVideoSection />
      {/* 8Minute Call Challenge Ask for Submissions*/}
      <MinuteChallengeSection />
      <Footer />
    </section>
  );
}
