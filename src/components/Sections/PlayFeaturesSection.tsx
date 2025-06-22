import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import Image from "next/image";

export const PlayFeaturesSection = () => {
  return (
    <>
      <section className="bg-[#ffffff] w-full pb-20 mt-[-5px]">
        <FadeInWhenVisible>
          <div className="text-[5vw] sm:text-[2vw] w-5/6 m-auto">
            <h1 className="text-center text-[6vw] sm:text-[2.5vw] mt-0 lg:mt-20 md:pt-20 text-[#013161] pb-5">
              Echoville: The Heart Chambers (Coming Soon)
            </h1>
            <p>
              Plaqtrick has a slimy, sinister plan and will stop at nothing
              until all of Echoville is doused in his ooey gooey glop! As Echo,
              you&apos;ll adventure with Artie and Vienna gathering wisdom and
              skills to build a heart healthy city and defend the citizens from
              Plaqtrick&apos;s sticky schemes. Explore the four chambers of the
              heart, complete challenges, and take part in real life activities
              to get your blood pumping.
            </p>
            <br></br>
            <p>
              Echoville: The Heart Chambers is a point-and-click adventure game
              with puzzle and mini-game elements. Education and entertainment
              are blended through creative challenges and immersive aesthetics.
            </p>
          </div>
          {/* Third row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-2 m-auto order-1 sm:order-2">
              <Image
                className="w-auto rounded-sm"
                src="/GameScreenshotPlay.png"
                alt="Game Screenshot"
                width="800"
                height="700"
              />
            </div>
            <div className="col-span-5 sm:col-span-3 m-auto order-2 sm:order-1">
              <h3 className="text-[#1473d2] text-[6vw] sm:text-[2.5vw]">
                Dynamic characters
              </h3>
              <p className="text-[5vw] sm:text-[2vw]">
                Play as Echo and get to know all the citizens of Echoville. Each
                character has an important role and striking personality that
                makes their city an efficient and unique place!
              </p>
            </div>
          </div>
          {/* First row of features */}
          <div className="pt-10 w-5/6 justify-self-center grid grid-cols-1 sm:grid-cols-5 gap-10 lg:gap-20 text-xl md:text-2xl">
            <div className="col-span-5 sm:col-span-3 m-auto order-2">
              <h3 className="text-[#1473d2] text-[6vw] sm:text-[2.5vw]">
                Interactive breaks
              </h3>
              <p className="text-[5vw] sm:text-[2vw]">
                Incorporating short bursts of real-life movement into the
                in-game play keeps players on their toes- literally! Learning
                about how to keep your heart pumping strongly is important, but
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
                Play and education are entwined in Echoville! Players will be
                able to explore new lands and discover more about their own
                anatomy, all while being immersed in a world of creativity and
                discovery.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
    </>
  );
};
