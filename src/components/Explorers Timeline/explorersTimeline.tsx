"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const weeks = [
  {
    number: 1,
    title: "Meeting 1",
    subtitle: "The Heartfelt Hello! ",
    info: "Welcome Explorers to your adventure! On this quest, you will get to know your fellow Explorers and their hearts!",
    imgSrc: "/ExplorerTimeline/week1.png",
    date: "January 21",
  },
  {
    number: 2,
    title: "Meeting 2",
    subtitle: "Mapping The Heart! ",
    info: "Explorers will discover their maps which will guide them through the chambers of their hearts.",
    imgSrc: "/ExplorerTimeline/week2.png",
    date: "January 28",
  },
  {
    number: 3,
    title: "Meeting 3",
    subtitle: "Go With The Flow! ",
    info: (
      <>
        Explorers will join{" "}
        <Link href="/characters/artie" className="underline text-[#00488D]">
          Artie
        </Link>{" "}
        and{" "}
        <Link href="/characters/vienna" className="underline text-[#00488D]">
          Vienna
        </Link>{" "}
        as they begin their journey through their hearts.
      </>
    ),
    imgSrc: "/ExplorerTimeline/week3.png",
    date: "February 4",
  },
  {
    number: 4,
    title: "Meeting 4",
    subtitle: "Mind-Well! ",
    info: "Explorers will discover their mind-heart connections.",
    imgSrc: "/ExplorerTimeline/week4.png",
    date: "February 11",
  },
  {
    number: 5,
    title: "Meeting 5",
    subtitle: "Eat-Well! ",
    info: "Explorers will learn how to best fuel their hearts.",
    imgSrc: "/ExplorerTimeline/week5.png",
    date: "February 18",
  },
  {
    number: 6,
    title: "Meeting 6",
    subtitle: "Rest-Well! ",
    info: "Explorers will learn how to recharge and rejuvenate their hearts.",
    imgSrc: "/ExplorerTimeline/week6.png",
    date: "February 25",
  },
  {
    number: 7,
    title: "Meeting 7",
    subtitle: "Move-Well! ",
    info: "Beyond the four walls of the classroom, Explorers will learn the four squares of Echo’s favorite outdoor game.",
    imgSrc: "/ExplorerTimeline/week7.png",
    date: "March 4",
  },
  {
    number: 8,
    title: "Meeting 8",
    subtitle: "Escape The Risk! ",
    info: "Uh oh! Explorers stumbled upon some blockages and will find ways to bypass them.",
    imgSrc: "/ExplorerTimeline/week8.png",
    date: "March 11",
  },
  {
    number: 10,
    title: "Meeting 10",
    subtitle: "On Your Mark, Get Set, Measure!",
    info: "A special guest will join the quest to teach Explorers how to measure their blood pressure and heart rates.",
    imgSrc: "/ExplorerTimeline/week9.png",
    date: "March 25",
  },
  {
    number: 11,
    title: "Meeting 11",
    subtitle: "Explorers Prepare For The Fair! (part 1)",
    info: "Explorers will prepare to showcase what they have learned from their quest.",
    imgSrc: "/ExplorerTimeline/week10.png",
    date: "April 1",
  },
  {
    number: 12,
    title: "Meeting 12",
    subtitle: "Explorers Prepare For The Fair! (part 2)",
    info: "Explorers will prepare to showcase what they have learned from their quest.",
    imgSrc: "/ExplorerTimeline/week11.png",
    date: "April 8",
  },
  {
    number: 13,
    title: "Meeting 13",
    subtitle: "ECHO Explorers Fair!",
    info: "Explorers lead a fair to raise awareness in their community, while pledging to continue their journeys of their hearts.",
    imgSrc: "/ExplorerTimeline/week12.png",
    date: "April 15",
  },
];

export const ExplorersTimeline = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || !itemRef.current) return;

    const itemsToScroll = getScrollAmount();
    const itemWidth = itemRef.current.offsetWidth;
    const gap = 24;

    const distance = (itemWidth + gap) * itemsToScroll;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const getScrollAmount = () => {
    const width = window.innerWidth;

    if (width < 768) return 1; // mobile
    if (width < 1024) return 3; // tablet
    return 3; // desktop
  };

  return (
    <div className="relative w-full">
      <h2 className="text-center text-3xl font-heading mb-3 text-[#00488D]">
        Program Timeline
      </h2>

      {/* Yellow Line */}
      <div
        className="absolute left-0 right-0 top-[30%] h-2 bg-[#FFD87A] z-0"
        style={{ transform: "translateY(-50%)" }}
      />

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[30%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-[#00488D]" />
      </button>

      {/* Timeline Items */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pl-16 pr-0 snap-x snap-mandatory scrollbar-hide relative z-10"
      >
        {weeks.map((week, index) => (
          <div
            key={week.number}
            ref={index === 0 ? itemRef : null}
            className={`group flex-shrink-0 w-72 rounded-3xl p-6 bg-transparent
    ${index === weeks.length - 1 ? "snap-end" : "snap-center"}
  `}
          >
            <Image
              src={week.imgSrc}
              alt={`Week ${week.number}`}
              width={110}
              height={110}
              className="text-center mx-auto bg-white rounded-full shadow-md"
            />

            <p className="text-center text-[#00488D] text-lg font-heading leading-snug mt-5 rounded-2xl p-5">
              {week.subtitle}
            </p>

            <div className="bg-[#dbecf1] w-1/2 mx-auto text-center rounded-full mt-1">
              <p className="text-center text-[#00488D] text-sm p-2 rounded-2xl">
                {week.date}
              </p>
            </div>
            {/* Info text */}
            <p
              className={`
    text-center text-[#00488D] text-sm mt-5
    ${
      isTouchDevice
        ? "block"
        : "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    }
  `}
            >
              <span>{week.info}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[30%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-[#00488D]" />
      </button>
    </div>
  );
};
