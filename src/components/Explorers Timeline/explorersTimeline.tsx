"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const sessions = [
  {
    number: 1,
    title: "Meeting 1",
    subtitle: "The Heartfelt Hello! ",
    info: "Welcome Explorers to your adventure! On this quest, you will get to know your fellow Explorers and their hearts!",
    imgSrc: "/ExplorerTimeline/week1.png",
    date: "Session 1",
  },
  {
    number: 2,
    title: "Meeting 2",
    subtitle: "Mapping The Heart! ",
    info: "Explorers will discover their maps which will guide them through the chambers of their hearts.",
    imgSrc: "/ExplorerTimeline/week2.png",
    date: "Session 2",
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
    date: "Session 3",
  },
  {
    number: 4,
    title: "Meeting 4",
    subtitle: "Mind-Well! ",
    info: "Explorers will discover their mind-heart connections.",
    imgSrc: "/ExplorerTimeline/week4.png",
    date: "Session 4",
  },
  {
    number: 5,
    title: "Meeting 5",
    subtitle: "Eat-Well! ",
    info: "Explorers will learn how to best fuel their hearts.",
    imgSrc: "/ExplorerTimeline/week5.png",
    date: "Session 5",
  },
  {
    number: 6,
    title: "Meeting 6",
    subtitle: "Rest-Well! ",
    info: "Explorers will learn how to recharge and rejuvenate their hearts.",
    imgSrc: "/ExplorerTimeline/week6.png",
    date: "Session 6",
  },
  {
    number: 7,
    title: "Meeting 7",
    subtitle: "Move-Well! ",
    info: "Beyond the four walls of the classroom, Explorers will learn the four squares of Echo’s favorite outdoor game.",
    imgSrc: "/ExplorerTimeline/week7.png",
    date: "Session 7",
  },
  {
    number: 8,
    title: "Meeting 8",
    subtitle: "Escape The Risk! ",
    info: "Uh oh! Explorers stumbled upon some blockages and will find ways to bypass them.",
    imgSrc: "/ExplorerTimeline/week8.png",
    date: "Session 8",
  },
  {
    number: 9,
    title: "Meeting 9",
    subtitle: "On Your Mark, Get Set, Measure!",
    info: "Explorers will how to measure their blood pressure and heart rates.",
    imgSrc: "/ExplorerTimeline/week9.png",
    date: "Session 9",
  },
  {
    number: 10,
    title: "Meeting 10",
    subtitle: "The HeartFelt Goodbye!",
    info: "Explorers celebrate the achievements they have made during their quest and pledge to continue on their HeartFelt journey!",
    imgSrc: "/ExplorerTimeline/week12.png",
    date: "Session 10",
  },
];

export function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisible = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return 1;
    return 3;
  };

  const scroll = (dir: "left" | "right") => {
    const visible = getVisible();
    const next =
      dir === "right"
        ? Math.min(currentIndex + visible, sessions.length - visible)
        : Math.max(currentIndex - visible, 0);
    setCurrentIndex(next);

    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".session-card") as HTMLElement;
      if (card) {
        const gap = 24;
        const cardWidth = card.offsetWidth + gap;
        scrollRef.current.scrollTo({
          left: next * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Title */}
        <h2
          className="text-center text-[#013161] mb-8"
          style={{
            fontFamily: "'Cookie Supply DEMO', 'Cookie'",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          Program Timeline
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous sessions"
            className="absolute -left-6 top-[40%] -translate-y-1/2 z-20 bg-[#00488D] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-[#013161] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sessions.map((session) => (
              <div
                key={session.number}
                className="session-card flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-5 flex flex-col items-center gap-1 snap-start"
              >
                {/* Image */}
                
                  <img
                    src={session.imgSrc}
                    alt={session.title}
                    className="h-[140px] w-auto object-contain"
                  />
      

                {/* Text */}
<div className="flex flex-col items-center gap-2 text-center bg-white rounded-xl p-6 flex-1 w-full mb-4">                  <h3
                    className="text-[#013161]"
                    style={{
                      fontSize: "1.4rem",
                    }}
                  >
                    {session.subtitle}
                  </h3>
                  <p
                    className="text-[#013161]"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    {session.info}
                  </p>
                </div>

                {/* Session badge */}
                <span
                  className="bg-[#FACA1E] text-[#013161] px-6 py-1.5 rounded-full mt-auto"
                  style={{
                    fontSize: "1rem"
                  }}
                >
                  {session.date}
                </span>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next sessions"
            className="absolute -right-6 top-[40%] -translate-y-1/2 z-20 bg-[#00488D] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-[#013161] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
