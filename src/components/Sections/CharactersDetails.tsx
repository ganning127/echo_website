import Image from "next/image";
import Link from "next/link";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { CharacterActivities } from "./CharactersActivities";
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
    <section className="flex flex-col">
      {/* Image Navigation Bar */}
      <FadeInWhenVisible>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 bg-[#DBECF1] bg-[url('/characters/corkboard_empty.png')] bg-contain md:bg-[url('/characters/corkboard_bar.png')] bg-center bg-no-repeat p-8">
          {CHARACTERS.map((char, index) => (
            <Link
              key={index}
              href={`/characters/${char.name.toLowerCase()}`}
              className="relative w-[20vw] h-[30vw] md:w-[15vw] md:h-[23vw] lg:h-[15vw] group"
            >
              <Image
                src={`/characters/${char.name.toLowerCase()}_pic.png`}
                alt={`${char.name} pic`}
                fill
                className={`object-contain transition-transform duration-300 ${
                  char.name === chosenCharacter.name ? "scale-110" : "scale-100"
                } `}
              />

              <p className="absolute bottom-[2.5vw] sm:bottom-[2.5vw] md:bottom-[3vw] lg:bottom-[0.5vw] text-black text-[4vw] md:text-[1.5vw] lg:text-[2vw] text-center w-[100%] font-bold">
                {char.name}
              </p>
            </Link>
          ))}
        </div>
      </FadeInWhenVisible>

      {/* Character Description */}
      <FadeInWhenVisible>
        <div className="bg-[#D9D9D9] bg-[url('/characters/characterBackground.svg')] bg-contain bg-top sm:bg-cover sm:bg-center bg-no-repeat pt-5 pb-10">
          <div className="flex flex-col md:flex-row items-start gap-2 sm:gap-12 w-5/6 m-auto">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-white rounded-2xl overflow-hidden w-full p-8">
                <div>
                  <h2 className="text-[9vw] lg:text-[2vw] sm:text-[4vw] mb-1 text-[#00488D]">
                    {chosenCharacter.name}
                  </h2>
                  <p
                    className="text-[4vw] lg:text-[1.5vw] sm:text-[2vw]"
                    dangerouslySetInnerHTML={{
                      __html: chosenCharacter.description,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="sm:w-[10vw] m-auto md:w-1/3 flex justify-center md:justify-end mt-0 order-1 md:order-2 mt-[3vw] md:mt-[5vw]">
              <Image
                src={chosenCharacter.image}
                alt={`${chosenCharacter.name} image`}
                width={160}
                height={160}
                className="w-[20vw] sm:w-[25vw] lg:w-[20vw] h-auto"
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Fun Facts */}
      <FadeInWhenVisible>
        <div className="bg-[#D9D9D9]">
          <div className="flex flex-col md:flex-row items-start gap-12 w-5/6 m-auto pb-20">
            {/* Fun Facts */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl overflow-hidden w-full p-8">
                <h2 className="text-[9vw] lg:text-[2vw] sm:text-[4vw] mb-1 text-[#00488D]">
                  FUN FACTS!
                </h2>
                <p className=" text-[4vw] lg:text-[1.5vw] sm:text-[2vw] pb-5">
                  <strong>Color:</strong> {chosenCharacter.color}
                </p>
                <p className=" text-[4vw] lg:text-[1.5vw] sm:text-[2vw] pb-5">
                  <strong>Items:</strong> {chosenCharacter.items}
                </p>
                <p className=" text-[4vw] lg:text-[1.5vw] sm:text-[2vw] pb-5">
                  <strong>Hobbies:</strong> {chosenCharacter.hobbies}
                </p>
                {chosenCharacter.catchphrase && (
                  <p className=" text-[4vw] lg:text-[1.5vw] sm:text-[2vw] italic">
                    &quot;{chosenCharacter.catchphrase}&quot;
                  </p>
                )}
              </div>
            </div>

            {/* Character Activities */}
            <div className="flex-1 space-y-6">
              <h2 className="text-[9vw] lg:text-[2vw] sm:text-[4vw] mb-1 text-[#00488D] m-auto text-center pb-5">
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
