import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const CharactersMain = () => {
  return (
    <section className="flex flex-col gap-32 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-cover md:bg-[url('/characters/corkboard_full.png')] md:bg-contain bg-center bg-no-repeat py-64 px-16">
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[36px] visible mb-1 text-center md:invisible">
                Characters
              </h2>
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
        </div>

        {/* Row with 2 images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
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
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
