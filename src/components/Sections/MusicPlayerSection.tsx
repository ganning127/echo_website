"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";
import { MusicButtonGroup } from "../ui/MusicButtonGroup";

const popupTexts: Record<string, string> = {
  Refocus: "This track is designed to ground and focus your energies.",
  Create: "This track is designed to inspire your imagination.",
  Move: "This track is designed to get you on your feet.",
  Relax: "This track is meant to calm you by bringing your heart rate down.",
};

const moreDetails: Record<string, string> = {
  Refocus:
    "The tempo is not too fast to hype up your heartbeat, but not too slow to make you sleepy; it strikes a balance to feel as though the music is moving forward steadily with the drum kit providing stability. The melody is simple so as not to distract but fade into the background allowing your brain to focus. The full instrumentation includes guitar, piano, celeste, and drum kit. The guitar provides a naturalistic and relaxed energy. The melody in the piano is doubled in the celeste providing a little shimmer to the sound.",
  Create:
    "Instead of grounding you, it is meant to evoke the fantastic and the ethereal with a full string section and highly active drum kit expanding the realm of possibility and giving the energy to dream and create. The full instrumentation includes a solo violin, marimba, drum kit, and full string orchestra. The inclusion of the string orchestra makes this track very different from everything else you hear throughout Echoville. The larger ensemble takes up more sonic space, daring you to dream bigger. The solo violin melody soars above the orchestra, adding another dimension to the string sound and contrasting with the shorter, more frequent marimba hits and active drum kit.",
  Move: "Solidly up tempo, the beat is meant to put you roughly in the target heart rate zone. The melody is light and carefree, bringing joy to however you choose to move. The full instrumentation includes two guitars, strummed dulcimer, celeste, and drums. The guitar chords and drums provide the energy of the track, keeping you moving and on your feet. The melody is doubled in the second guitar and strummed dulcimer making the stand out against the first guitar. The celeste brings a countermelody, weaving between the gaps of the melody like a partner dance. ",
  Relax:
    " It is much slower and looser without a drum kit keeping time. The piano grounds the music while a simple melody in the celeste gives a sense of calm. The soft locust sound brings reminders of how the natural world feels at night when we are about to fall asleep. The full instrumentation includes marimba, piano, celeste, and a locust sound. The sound world was inspired by the Rockabye Baby! lullaby covers of popular music for babies to fall asleep to.",
};

const songName: Record<string, string> = {
  Refocus: "Echo's Reflection",
  Create: "Echo's Fantasy",
  Move: "Echo's Dance",
  Relax: "Echo's Lullaby",
};

const pillarDetails: Record<string, { label: string; image: string }> = {
  Refocus: { label: "Mind Well", image: "/pillars/mind.png" },
  Create: { label: "Eat Well", image: "/pillars/eat.png" },
  Move: { label: "Move Well", image: "/pillars/move.png" },
  Relax: { label: "Sleep Well", image: "/pillars/sleep.png" },
};

export const MusicPlayerSection = () => {
  const [selection, setSelection] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // ✅ track play state
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSelect = (track: string, src: string) => {
    setSelection(track);
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.loop = true;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      {/* Overlay Button */}
      {selection && (
        <button
          onClick={togglePlay}
          className="fixed top-[5vw] sm:top-[3vw] lg:top-4 left-[45%] lg:left-4 z-50 bg-[#1473d2] lg:bg-[#013161]  
         hover:text-[#000000] lg:hover:text-white text-white px-4 py-2 hover:bg-[#FFD87A] rounded lg:hover:bg-[#1473d2] transition md:text-[2vw] text-[4vw]"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
      )}

      <audio ref={audioRef} />
      <section className="w-full pb-20">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-5 pt-10 w-5/6 justify-self-center flex-col-reverse md:flex-row items-start gap-10 lg:gap-30">
            {/* Window */}
            <div className="col-span-3 md:col-span-2 hidden sm:block">
              <Image
                src="/Entire Window.png"
                className="md:m-0 m-auto"
                width="700"
                alt="Window displaying morning sunshine"
                height="400"
              />
            </div>

            {/* Button group and signage */}
            <div className="col-span-3 text-[13px] md:text-xl flex flex-wrap">
              <div className="text-[1.5vw] justify-contents-center w-full grid grid-cols-1 md:grid-cols-4 order-2 md:order-1">
                <MusicButtonGroup onSelect={handleSelect} />
              </div>
              <div className="w-full pt-10 order-1 md:order-2">
                {/* 🟨 New Section below the radio/oranges/tabletop */}
                {selection && (
                  <section className="w-full m-auto lg:pb-20">
                    <div className="m-auto rounded-md">
                      <h2 className="text-[5vw] sm:text-[3vw] lg:text-[2vw]  font-bold mb-4">
                        Song Name: {songName[selection]}
                      </h2>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-heading text-[5vw] sm:text-[3vw] lg:text-[2vw] text-[#000000] font-medium">
                          Mood: {selection}
                        </span>{" "}
                        <Image
                          src={pillarDetails[selection].image}
                          alt={pillarDetails[selection].label}
                          width={30}
                          height={30}
                          className="inline-block"
                        />
                      </div>
                      <p className="text-[5vw] sm:text-[3vw] lg:text-[1.5vw] text-gray-700">
                        {moreDetails[selection]}
                      </p>
                    </div>
                  </section>
                )}
                {!selection && (
                  <Image
                    className="m-auto mb-5"
                    src="/Rooster Sign.png"
                    width="350"
                    alt="rooster sign"
                    height="40"
                  />
                )}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      <section
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url('/front countertop.png')` }}
      >
        {/* Radio, oranges, tabletop */}
        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 w-5/6 justify-self-center flex-col-reverse md:flex-row items-start gap-10 bg-[url(/front countertop.png)]">
          {/* Radio */}
          <div className="justify-contents-center col-span-2 relative bottom-[100px] md:bottom-[200px] lg:bottom-[300px] w-[200px] md:w-[200px] lg:w-[350px]">
            <Image
              src="/Radio.png"
              width="350"
              alt="orange radio"
              height="70"
            />
            {selection && (
              <div className="absolute top-0 left-[21vw] w-full h-full flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/Radio Bubble.png"
                    alt="Popup"
                    width={700}
                    height={450}
                    className="rounded-md"
                  />
                  <p className="absolute pl-[20px] pr-[20px] top-1/2 left-[20%] transform -translate-y-1/2 text-black text-center text-sm lg:text-lg font-semibold">
                    {popupTexts[selection]}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Oranges */}
          <div className="justify-contents-center col-span-2 text-[13px] md:text-xl flex flex-wrap">
            <div className="relative w-[60%] lg:w-full pt-6 invisible md:visible md:bottom-[100px]">
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
