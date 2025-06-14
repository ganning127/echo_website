import Image from "next/image";
import Link from "next/link";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { CharacterActivities } from "@/components/Sections/CharactersActivities";
import characters from "@/lib/characters.json";

const CHARACTERS = characters;

type Props = {
  name: string;
};

export const CharactersDetails = ({ name }: Props) => {
  const chosenCharacter = CHARACTERS.find(
    (char) => char.name.toLowerCase() === name.toLowerCase()
  );

  if (!chosenCharacter) {
    return (
      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Character not found.</h2>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-32">
      {/* Image Navigation Bar */}
      <FadeInWhenVisible>
        <div className="flex flex-wrap justify-center gap-12 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-contain md:bg-[url('/characters/corkboard_bar.png')] bg-center bg-no-repeat p-8">
          {CHARACTERS.map((char, index) => (
            <Link
              key={index}
              href={`/characters/${char.name.toLowerCase()}`}
              className="relative w-[150px] h-[200px] group"
            >
              <Image
                src={`/characters/${char.name.toLowerCase()}_pic.png`}
                alt={`${char.name} pic`}
                fill
                className={`object-contain transition-transform duration-300 ${
                  char.name === chosenCharacter.name ? "scale-110" : "scale-100"
                } ${index % 2 === 0 ? "-rotate-6" : "rotate-6"}`}
              />

              <p className="absolute bottom-4 left-4 text-black text-lg font-bold">
                {char.name}
              </p>
            </Link>
          ))}
        </div>
      </FadeInWhenVisible>

      {/* Character Description */}
      <FadeInWhenVisible>
        <div className="bg-[#DBECF1] bg-[url('/characters/background.png')] bg-cover bg-center bg-no-repeat p-8">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-[36px] mb-1">{chosenCharacter.name}</h2>
                <h2>{chosenCharacter.pronouns}</h2>
                <p
                  className="text-[24px]"
                  dangerouslySetInnerHTML={{
                    __html: chosenCharacter.description,
                  }}
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <Image
                src={chosenCharacter.image}
                alt={`${chosenCharacter.name} image`}
                width={160}
                height={160}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Fun Facts */}
      <FadeInWhenVisible>
        <div className="bg-[#D9D9D9]">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Fun Facts */}
            <div className="flex-1 space-y-6">
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

            {/* Character Activities */}
            <div className="flex-1 space-y-6">
              <h2 className="text-[36px] mb-1 text-black">
                GET TO KNOW THE CHARACTER BETTER!
              </h2>
              <CharacterActivities characterName={chosenCharacter.name} />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
