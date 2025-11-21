"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const weeks = [
  {
    number: 1,
    title: "Meeting 1",
    subtitle: "Your Heart and What It Looks Like ",
    imgSrc: "/ExplorerTimeline/week1.png",
    date: "January 26",
  },
  {
    number: 2,
    title: "Meeting 2",
    subtitle: "How Blood Flows Through the Heart ",
    imgSrc: "/ExplorerTimeline/week2.png",
    date: "February 2",
  },
  {
    number: 3,
    title: "Meeting 3",
    subtitle: "How Nutrition Supports Heart Health ",
    imgSrc: "/ExplorerTimeline/week3.png",
    date: "February 9",
  },
  {
    number: 4,
    title: "Meeting 4",
    subtitle: "How Rest Supports Heart Health ",
    imgSrc: "/ExplorerTimeline/week4.png",
    date: "February 23",
  },
  {
    number: 5,
    title: "Meeting 5",
    subtitle: "Regular Movement Helps Your Heart ",
    imgSrc: "/ExplorerTimeline/week5.png",
    date: "March 2",
  },
  {
    number: 6,
    title: "Meeting 6",
    subtitle: "How Our Emotions Affect the Heart ",
    imgSrc: "/ExplorerTimeline/week6.png",
    date: "March 9 ",
  },
  {
    number: 7,
    title: "Meeting 7",
    subtitle: "Blood Pressure with Public Safety",
    imgSrc: "/ExplorerTimeline/week7.png",
    date: "March 23 ",
  },
  {
    number: 8,
    title: "Meeting 8",
    subtitle: "Heart Health Community Fair Prep I",
    imgSrc: "/ExplorerTimeline/week8.png",
    date: "March 30",
  },
  {
    number: 9,
    title: "Meeting 9",
    subtitle: "Heart Health Community Fair Prep II",
    imgSrc: "/ExplorerTimeline/week9.png",
    date: "April 6",
  },
  {
    number: 10,
    title: "Meeting 10",
    subtitle: "Heart Health Community Fair ",
    imgSrc: "/ExplorerTimeline/week10.png",
    date: "April 13",
  },
];

export const ExplorersTimeline = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Responsive scroll amount
      let amount = 950; // default for desktop

      if (window.innerWidth < 480) {
        amount = 280; // mobile (very small screens)
      } else if (window.innerWidth < 768) {
        amount = 400; // mobile large / small tablet
      } else if (window.innerWidth < 1024) {
        amount = 650; // tablets
      }

      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Title */}
      <h2 className="text-center text-3xl font-heading mb-3 text-[#00488D]">
        Program Timeline
      </h2>

      {/* Yellow line behind items */}
      <div
        className="absolute left-0 right-0 top-[47%] h-2 bg-[#FFD87A] z-0"
        style={{ transform: "translateY(-50%)" }}
      ></div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[47%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-[#00488D]" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-16 snap-x snap-mandatory scrollbar-hide relative z-10"
      >
        {weeks.map((week) => (
          <div
            key={week.number}
            className="flex-shrink-0 w-72 rounded-3xl p-6 snap-center bg-transparent"
          >
            {/* Icon */}
            <Image
              src={week.imgSrc}
              alt={`Week ${week.number}`}
              width={110}
              height={110}
              className="text-center mx-auto mb-4 bg-white rounded-full shadow-md"
            />

            {/* Text */}
            <h3 className="text-center text-[#00488D] text-lg ">{week.date}</h3>
            <h3 className="text-center text-[#00488D] text-xl font-heading leading-snug mt-2">
              {week.subtitle}
            </h3>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[47%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-[#00488D]" />
      </button>
    </div>
  );
};
