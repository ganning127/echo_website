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
              <h3 className="text-[#1473d2] text-[6vw] sm:text-[2.5vw]">
                Interactive breaks
              </h3>
              <p className="text-[5vw] sm:text-[2vw]">
                Incorporating short bursts of real-life movement into the
                in-game play keeps players on their toes- literally! Learning
                about how to keep your heart pumping strong is important, but
                putting that knowledge to use is life changing!
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
                src="/GameScreenshotJournalHeart.png"
                alt="Game Screenshot of the journal"
                width="800"
                height="700"
              />
            </div>
            <div className="col-span-5 sm:col-span-3 m-auto sm:order-1 order-2">
              <h3 className="text-[#1473d2] text-[6vw] sm:text-[2.5vw]">
                Contemporary learning
              </h3>
              <p className="text-[5vw] sm:text-[2vw]">
                Art and education are entwined in Echoville! Players will be
                able to explore new lands and discover more about their own
                anatomy, all while being immersed in a world of creativity and
                color!
              </p>
            </div>
          </div>
          {/* Third row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-3 m-auto order-2">
              <h3 className="text-[#1473d2] text-[6vw] sm:text-[2.5vw]">
                Dynamic characters
              </h3>
              <p className="text-[5vw] sm:text-[2vw]">
                Players will join Echo in getting to know all the citizens of
                Echoville. (Add something about like going on
                adventures/challenges) Each character has an important role in
                heart health and must work together to keep Echoville running
                efficiently.
              </p>
            </div>
            <div className="col-span-5 sm:col-span-2 m-auto order-1">
              <Image
                className="w-auto rounded-sm"
                src="/GameScreenshotPlay.png"
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
