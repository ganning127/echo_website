import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import Link from "next/link";

export const CharactersMain = () => {
  return (
    <section className="flex flex-col gap-32 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-cover sm:bg-[url('/characters/corkboard_full.png')] md:bg-contain bg-center bg-no-repeat sm:h-[80vw] justify-content-center">
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-[35vw] sm:mt-[20vw] md:mt-[23vw] lg:mt-[0vw]">
          <div className="flex-1">
            {/* Centered h2 on small screens only */}
            <div className="w-full flex justify-center sm:hidden">
              <h2 className="text-[15vw] sm:text-[9vw] text-center text-[#00488D] m-auto">
                Characters
              </h2>
            </div>
          </div>
        </div>

        {/* Row with 3 images */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8 mb-8 mt-[15vw] sm:mt-[2vw] lg:mt-[22vw] m-auto w-[50vw]">
          <div className="relative w-[40vw] sm:w-[20vw] min-w-[35px] aspect-square group">
            <Image
              src="/characters/sticky_notes.png"
              alt="sticky notes"
              fill
              className="w-auto h-auto"
            />
          </div>
          <Link
            href="/characters/echo"
            className="relative w-full sm:w-[20vw] aspect-square group"
          >
            <div className="relative w-[40vw] sm:w-[15vw] aspect-square group">
              <Image
                src="/characters/echo_pic.png"
                alt="echo pic"
                fill
                className="object-contain rotate-10"
              />
              <p className="absolute bottom-2 text-center text-[5vw] left-[13vw] sm:left-[4vw] text-black sm:text-[2vw] font-bold rotate-10">
                Echo
              </p>
            </div>
          </Link>
          <Link
            href="/characters/artie"
            className="relative w-full sm:w-[15vw] min-w-[35px]  aspect-square group"
          >
            <div className="relative w-[40vw] sm:w-[15vw] min-w-[35px] aspect-square group">
              <Image
                src="/characters/artie_pic.png"
                alt="artie pic"
                fill
                className="object-contain -rotate-10"
              />
              <p className="absolute bottom-2 text-center left-[17vw] sm:left-[6vw] text-black text-[5vw] sm:text-[2vw] font-bold -rotate-10">
                Artie
              </p>
            </div>
          </Link>
        </div>

        {/* Row with 2 images */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-18 mt-[4vw] m-auto w-[50vw]">
          <Link
            href="/characters/vienna"
            className="relative w-full sm:w-[15vw] aspect-square group"
          >
            <div className="relative w-[40vw] sm:w-[15vw] aspect-square group">
              <Image
                src="/characters/vienna_pic.png"
                alt="vienna pic"
                fill
                className="object-contain rotate-10"
              />
              <p className="absolute bottom-2 text-center text-[5vw] left-[10vw] sm:left-[3vw] text-black sm:text-[2vw] font-bold rotate-10">
                Vienna
              </p>
            </div>
          </Link>
          <Link
            href="/characters/plaqtrick"
            className="relative w-full sm:w-[15vw] min-w-[35px] aspect-square group"
          >
            <div className="relative w-[40vw] sm:w-[15vw] min-w-[35px] aspect-square group">
              <Image
                src="/characters/plaqtrick_pic.png"
                alt="plaqtrick pic"
                fill
                className="object-contain -rotate-10"
              />
              <p className="absolute bottom-2 text-center text-[5vw] left-[13vw] sm:left-[4vw] text-black sm:text-[2vw] font-bold -rotate-10">
                Plaqtrick
              </p>
            </div>
          </Link>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
