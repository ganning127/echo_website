import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { ComposerNoteCard } from "../Cards/ComposerNoteCard";

export const ComposerNoteSection = () => {
  return (
    <section className="bg-[#dB8A39] w-full pb-20 pt-[3vw]">
      <FadeInWhenVisible>
        <div className="w-5/6 justify-self-center flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="w-full md:w-1/4">
            <Image
              src="/Bella Rose Kelly Headshot - MUSIC PAGE.jpg"
              alt="Bella Rose Headshot"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-3/4 p-6">
            <ComposerNoteCard />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
