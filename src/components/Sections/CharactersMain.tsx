import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import Link from "next/link";

export const CharactersMain = () => {
  return (
    <section className="flex flex-col gap-32 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-cover md:bg-[url('/characters/corkboard_full.png')] md:bg-contain bg-center bg-no-repeat py-64 px-16">
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            {/* Centered h2 on small screens only */}
            <div className="w-full flex justify-center md:hidden">
              <h2 className="text-[36px] mb-1 text-center">Characters</h2>
            </div>
          </div>
        </div>

        {/* Row with 3 images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group">
            <Image
              src="/characters/sticky_notes.png"
              alt="sticky notes"
              fill
              className="w-auto h-auto"
            />
          </div>
          <Link
            href="/characters/echo"
            className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group"
          >
            <div className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group">
              <Image
                src="/characters/echo_pic.png"
                alt="echo pic"
                fill
                className="object-contain rotate-10"
              />
              <p className="absolute bottom-5 left-14 text-black text-lg font-bold rotate-10">
                Echo
              </p>
            </div>
          </Link>
          <Link
            href="/characters/artie"
            className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group"
          >
            <div className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group">
              <Image
                src="/characters/artie_pic.png"
                alt="artie pic"
                fill
                className="object-contain -rotate-10"
              />
              <p className="absolute bottom-4 left-18 text-black text-lg font-bold -rotate-10">
                Artie
              </p>
            </div>
          </Link>
        </div>

        {/* Row with 2 images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <Link
            href="/characters/vienna"
            className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group"
          >
            <div className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group">
              <Image
                src="/characters/vienna_pic.png"
                alt="vienna pic"
                fill
                className="object-contain rotate-10"
              />
              <p className="absolute bottom-5 left-14 text-black text-lg font-bold rotate-10">
                Vienna
              </p>
            </div>
          </Link>
          <Link
            href="/characters/plaqtrick"
            className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group"
          >
            <div className="relative w-full md:w-[20vw] min-w-[35px] max-w-[180px] aspect-square group">
              <Image
                src="/characters/plaqtrick_pic.png"
                alt="plaqtrick pic"
                fill
                className="object-contain -rotate-10"
              />
              <p className="absolute bottom-4 left-18 text-black text-lg font-bold -rotate-10">
                Plaqtrick
              </p>
            </div>
          </Link>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
