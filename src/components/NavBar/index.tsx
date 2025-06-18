"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAV_CONTENT } from "./NavContent";
import Link from "next/link";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="hidden lg:flex w-full justify-center items-center">
        <Link href="/">
          <Image
            src="/navbar_logo.png"
            width={200}
            height={200}
            alt="EdEcho logo"
          />
        </Link>
        {NAV_CONTENT.map((item, index) => {
          const isLeft = index === 0;
          const isRight = index === NAV_CONTENT.length - 1;

          return (
            <NavLinkBox
              key={item.href}
              title={item.title}
              href={item.href}
              isLeft={isLeft}
              isRight={isRight}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between px-4 py-3 lg:hidden bg-[#013161]">
        <Link href="/">
          <Image
            src="/navbar_logo.png"
            width={150}
            height={10}
            alt="EdEcho logo"
            className="color"
          />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:cursor-pointer"
        >
          {isOpen ? (
            <RxHamburgerMenu className="w-8 h-8 text-[#FFD87A] rotate-90" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8 text-[#FFD87A]" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#013161] z-10">
            <div className="flex flex-col items-center gap-2 p-4">
              {NAV_CONTENT.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.href}
                    className={cn(
                      "text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md",
                      item.title === "Play" ? "text-[36px]" : "text-[20px]"
                    )}
                  >
                    <h4>{item.title}</h4>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinkBox = ({
  title,
  href,
  isLeft,
  isRight,
  darker = false,
}: {
  title: string;
  href: string;
  isLeft: boolean;
  isRight: boolean;
  darker?: boolean;
}) => {
  let roundedClass = "";
  if (isRight) {
    roundedClass = "rounded-r-lg border-l-2";
  } else if (isLeft) {
    roundedClass = "rounded-l-lg";
  } else {
    roundedClass = "border-l-2";
  }

  return (
    <a href={href}>
      <div
        className={cn(
          "border-[#0F4C75] p-4 text-white px-6",
          roundedClass,
          darker
            ? "bg-[#013161] hover:bg-[#011a33]"
            : "bg-[#1876D0] hover:bg-[#013161]"
        )}
      >
        <h2 className="text-xl">{title}</h2>
      </div>
    </a>
  );
};
