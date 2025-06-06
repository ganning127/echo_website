import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import Image from "next/image";

export const PlayFeaturesSection = () => {
  return (
    <>
      <section className="bg-[#ffffff] w-full pb-20 mt-[-5px]">
        <FadeInWhenVisible>
          <h1 className="text-center text-3xl mt-0 lg:mt-20 md:pt-20 text-[#013161]">
            Game Title: Coming Soon
          </h1>
          {/* First row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-3 m-auto order-2">
              <h3 className="text-[#1473d2]">Feature</h3>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
            <div className="col-span-5 sm:col-span-2 m-auto order-1">
              <Image
                className="w-auto rounded-sm"
                src="/GameScreenshotBreak.png"
                alt="Game Screenshot of break time"
                width="800"
                height="700"
              />
            </div>
          </div>
          {/* Second row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-2 m-auto sm:order-2 order-1">
              <Image
                className="w-auto rounded-sm"
                src="/GameScreenshotJournal.png"
                alt="Game Screenshot of the journal"
                width="800"
                height="700"
              />
            </div>
            <div className="col-span-5 sm:col-span-3 m-auto sm:order-1 order-2">
              <h3 className="text-[#1473d2]">Feature</h3>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div>
          {/* Third row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-3 m-auto order-2">
              <h3 className="text-[#1473d2]">Feature</h3>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
            <div className="col-span-5 sm:col-span-2 m-auto order-1">
              <Image
                className="w-auto rounded-sm"
                src="/"
                alt="Game Screenshot"
                width="800"
                height="700"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  );
};
