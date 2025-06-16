import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { AllActivities } from "@/components/Sections/AllActivities";
import Image from "next/image";

export default function Activities() {
  return (
    <section className="w-full bg-[#B77372]">
      <NavBar />
      <div className="pt-5 pb-5 w-5/6 m-auto text-center">
        {/*
        <Image
          className="w-xs justify-self-center rounded-lg pb-10"
          src="/Make.png"
          alt="Activities page"
          width="300"
          height="100"
        /> */}
        <h1 className="text-[8vw] sm:text-[4vw] text-black">Activities</h1>
        <p className="text-black text-[4vw] sm:text-[1.5vw] md:text-[2vw] w-3/6 m-auto">
          Click on an activity to learn more about it!
        </p>
        <div className="relative z-20">
          <AllActivities />
        </div>
      </div>
      <div className="pb-10">
        <Image
          className="absolute md:mt-40 left-0 top-30 w-auto visible z-0 h-[60vw] lg:h-[40vw] max-h-[500px]"
          src="/Activities Window Left.png"
          alt="window"
          width="200"
          height="500"
        />

        <Image
          className="absolute md:mt-40 right-0 top-30 w-auto visible z-0 h-[60vw] lg:h-[40vw] max-h-[500px]"
          src="/Activities window Right.png"
          alt="window"
          width="200"
          height="500"
        />
      </div>
      <div className="relative">
        <Image
          className="absolute left-0 z-10 bottom-0 w-auto visible h-[40vw] md:h-[25vw] max-h-[500px]"
          src="/Activities Machine 1.png"
          alt="Machine"
          width="200"
          height="500"
        />
        <Image
          className="absolute right-0 z-10 bottom-8 w-auto visible h-[20vw] md:h-[15vw] max-h-[500px]"
          src="/Activities Machine 2.png"
          alt="Machine"
          width="200"
          height="500"
        />
        <div className="h-[10px] bg-[#7C2D36]"></div>
        <Image
          className="relative object-contain w-full bg-[#9C6363]"
          src="/Activities floor pattern.png"
          alt="door"
          width="800"
          height="100"
        />
      </div>
      <Footer />
    </section>
  );
}
