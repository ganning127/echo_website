"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAV_CONTENT } from "./NavContent";
import { NavLinkBox, DropdownNavBox } from "./NavComponents";
import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarIcon, Mail } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">

      {/* Desktop */}
      <div className="hidden lg:flex w-full justify-center items-center absolute">
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

          if (item.children) {
            return (
              <DropdownNavBox
                key={item.title}
                title={item.title}
                href={item.href} 
                children={item.children}
                isLeft={isLeft}
                isRight={isRight}
              />
            );
          }

          return (
            <NavLinkBox
              key={item.title}
              title={item.title}
              href={item.href!}
              isLeft={isLeft}
              isRight={isRight}
            />
          );
        })}

        <a
          href="/contact"
          className="ml-5 flex items-center justify-center w-15 h-15 rounded-full bg-[#1876D0] hover:bg-[#013161] transition-colors border-5 border-white"
        >
          <span className="sr-only">Contact Us</span>
          <Mail aria-hidden="true" className="w-5 h-5 text-white" />
        </a>

        <a
          href="/calendar"
          className="ml-5 flex items-center justify-center w-15 h-15 rounded-full bg-[#1876D0] hover:bg-[#013161] transition-colors border-5 border-white"
        >
          <span className="sr-only">View calendar</span>
          <CalendarIcon aria-hidden="true" className="w-5 h-5 text-white" />
        </a>

        <a href="/donate" className="ml-5">
          <Button className="font-heading text-[20px] border-[#ffffff] p-7 text-white px-6 border-4 hover:bg-[#00a6c4] bg-[#013161]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#FFD87A"
            >
              <path d="M12 21s-6.7-4.3-10-9c-1.7-2.4-1-5.9 1.5-7.7 2.2-1.5 5.2-.9 6.9 1C12.3 3.4 15.3 2.8 17.5 4.3c2.5 1.8 3.2 5.3 1.5 7.7-3.3 4.7-10 9-10 9z" />
            </svg>{" "}
            Donate
          </Button>
        </a>
      </div>

      {/* Mobile bar */}
      <div className="flex items-center justify-between px-4 py-3 lg:hidden bg-[#013161]">
        <Link href="/" aria-label="EdEcho home">
          <Image
            src="/navbar_logo.png"
            width={150}
            height={10}
            alt="EdEcho logo"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:cursor-pointer"
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu
            className={cn("w-8 h-8 text-[#FFD87A]", isOpen && "rotate-90")}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden w-full bg-[#013161] z-10">
          <div className="flex flex-col items-center gap-2 p-4">

            {NAV_CONTENT.map((item) => {
              if (item.children) {
                return (
                  <div key={item.title} className="w-full">
                    <h4 className="text-[#FFD87A] font-heading text-center font-semibold py-1">
                      {item.title}
                    </h4>
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md py-1"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                );
              }

              return (
                <a
                  key={item.title}
                  href={item.href!}
                  className="text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md"
                >
                  <h4>{item.title}</h4>
                </a>
              );
            })}

            <a
              href="/contact"
              className="text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md"
            >
              Contact
            </a>
            <a
              href="/calendar"
              className="text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md"
            >
              Calendar
            </a>
            <a
              href="/donate"
              className="text-white font-heading hover:bg-blue-400 w-full text-center transition-colors rounded-md"
            >
              Donate
            </a>

          </div>
        </div>
      )}

    </nav>
  );
};