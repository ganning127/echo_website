import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { MusicButtonGroup } from "../ui/MusicButtonGroup";

export const MusicPlayerSection = () => {
  return (
    <>
      <section className="w-full pb-20">
        <FadeInWhenVisible>
          {/* Window, button, and signage*/}
          <div className="grid grid-cols-1 md:grid-cols-5 pt-10 w-5/6 justify-self-center flex-col-reverse md:flex-row items-start gap-10">
            {/* Window*/}
            <div className="col-span-2">
              <Image
                className=""
                src="/Entire Window.png"
                width="700"
                alt="Window displaying morning sunshine"
                height="400"
              />
            </div>
            {/* Button group and signage*/}
            <div className="justify-contents-center col-span-3 text-[13px] md:text-xl flex flex-wrap">
              <div className="w-full grid grid-cols-1 md:grid-cols-4">
                <MusicButtonGroup />
              </div>
              <div className="w-full pt-6">
                <Image
                  className="m-auto"
                  src="/Rooster Signage.png"
                  width="300"
                  alt="rooster sign"
                  height="40"
                />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>
      <section
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/front countertop.png')` }}
      >
        {/* Radio, oranges, tabletop*/}
        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 w-5/6 justify-self-center flex-col-reverse md:flex-row items-start gap-10 bg-[url(/front countertop.png)]">
          {/* Radio*/}

          <div className="justify-contents-center col-span-2 relative bottom-[100px] md:bottom-[200px] lg:bottom-[300px] w-[200px] md:w-[200px] lg:w-[350px]">
            <Image
              className=""
              src="/Radio.png"
              width="350"
              alt="orange radio"
              height="70"
            />
          </div>
          {/* Oranges*/}
          <div className="justify-contents-center col-span-2 text-[13px] md:text-xl flex flex-wrap">
            <div className="relative w-full pt-6 invisible md:visible md:bottom-[100px]">
              <Image
                className="m-auto"
                src="/Oranges.png"
                width="300"
                alt="oranges"
                height="40"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
