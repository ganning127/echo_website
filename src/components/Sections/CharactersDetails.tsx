import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import characters from "@/lib/characters.json";

const CHARACTERS = characters;

export const CharactersDetails = () => {
  const echo = CHARACTERS[0];
  const plaqtrick = CHARACTERS[1];
  const artie = CHARACTERS[2];
  const vienna = CHARACTERS[3];

  const chosenCharacter = artie;

  return (
    <section className="flex flex-col gap-32">
      <FadeInWhenVisible>
        <div className="flex flex-wrap gap-32 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-contain md:bg-[url('/characters/corkboard_bar.png')] bg-center bg-no-repeat p-0 mx-0">
          <div className="relative w-fill md:w-[20vw] w-[200px] h-[300px]">
            <Image
              src="/characters/echo_pic.png"
              alt="echo pic"
              fill
              className="object-contain -rotate-10"
            />
            <p className="absolute bottom-5 left-14 text-black text-lg font-bold -rotate-10">
              Echo
            </p>
          </div>
          <div className="relative w-fill md:w-[20vw] w-[200px] h-[300px]">
            <Image
              src="/characters/plaqtrick_pic.png"
              alt="echo pic"
              fill
              className="object-contain rotate-10"
            />
            <p className="absolute bottom-5 left-14 text-black text-lg font-bold rotate-10">
              Echo
            </p>
          </div>
          <div className="relative w-fill md:w-[20vw] w-[200px] h-[300px]">
            <Image
              src="/characters/artie_pic.png"
              alt="echo pic"
              fill
              className="object-contain -rotate-10"
            />
            <p className="absolute bottom-5 left-14 text-black text-lg font-bold -rotate-10">
              Echo
            </p>
          </div>
          <div className="relative w-fill md:w-[20vw] w-[200px] h-[300px]">
            <Image
              src="/characters/vienna_pic.png"
              alt="echo pic"
              fill
              className="object-contain rotate-10"
            />
            <p className="absolute bottom-5 left-14 text-black text-lg font-bold rotate-10">
              Echo
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[36px]   mb-1">{chosenCharacter.name}</h2>
              <h2>{chosenCharacter.pronouns}</h2>
              <p className="text-[24px]">{chosenCharacter.description}</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <Image
              src={chosenCharacter.image}
              alt="ECHO Logo"
              width={160}
              height={160}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[36px] mb-1">FUN FACTS!</h2>
              <p className="text-[24px]">
                <strong>Color:</strong> {chosenCharacter.color}
              </p>
              <p className="text-[24px]">
                <strong>Items:</strong> {chosenCharacter.items}
              </p>
              <p className="text-[24px]">
                <strong>Hobbies:</strong> {chosenCharacter.hobbies}
              </p>
              {chosenCharacter.catchphrase && (
                <p className="text-[24px] italic">
                  "{chosenCharacter.catchphrase}"
                </p>
              )}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
