"use client";

import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import { NAV_CONTENT } from "../NavBar/NavContent";
import { NewsletterStripFooter } from "../Sections/NewsletterStripFooter";

export const Footer = () => {
  return (
    <>
      <NewsletterStripFooter></NewsletterStripFooter>
      <footer className="bg-[#1473d2] text-white px-8 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="col-span-1 m-auto sm:m-0 text-center sm:text-left">
            <Image
              src="/footer_logo_no_padding.png"
              alt="ECHO Logo"
              width={160}
              height={80}
              className="w-auto h-auto m-auto sm:m-0 pb-5"
            />
            <p>
              ECHO is a 501(c)(3) charity.
              <br className="sm:block invisible" /> Donations are tax
              deductible.{" "}
            </p>
            <p>EIN: 99-3101733</p>
          </div>

          <div className="col-span-1 sm:block hidden">
            <h1 className="text-[30px]">Connect</h1>
            <div className="flex items-center pb-3 gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:edecho.org@gmail.com">edecho.org@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Instagram className="w-4 h-4" />
              <a
                href="https://instagram.com/edechoorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                @edechoorg
              </a>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="col-span-1">
            <h1 className="text-[30px] sm:block hidden">Explore</h1>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white md:justify-end m-auto sm:m-0">
              {NAV_CONTENT.map((item) => (
                <a key={item.href} href={item.href} className="block">
                  <p className="font-heading sm:font-body sm:text-[15px] text-[20px]">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-5 sm:block hidden"></hr>
        <div className="max-w-7xl mx-auto sm:grid grid-cols-3 gap-4 hidden">
          <div className="col-span-2">
            <p className="text-sm">
              &copy; 2025 Early Cardiovascular Health Outreach
            </p>
          </div>
          <div className="col-span-1 flex gap-5 justify-end">
            <a href={"/privacyPolicy"}>
              <p>Privacy Policy</p>
            </a>
            <a href={"/TermsandConditions"}>
              <p>Terms and Conditions</p>
            </a>
          </div>
        </div>
      </footer>

      <div className="max-w-7xl mx-auto sm:hidden grid-cols-3 gap-4 grid bg-[#00488D] py-5">
        <div className="col-span-3 m-auto">
          <div className="flex gap-3 text-sm justify-center items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/edechoorg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#FFD87A] rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <Instagram className="w-5 h-5 text-black" />
            </a>

            {/* Mail */}
            <a
              href="mailto:edecho.org@gmail.com"
              className="w-10 h-10 bg-[#FFD87A] rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <Mail className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>

        <div className="col-span-3 text-slate-50">
          <p className="text-md text-center">
            &copy; 2025 Early Cardiovascular Health Outreach
          </p>
        </div>
        <div className="col-span-3 flex gap-5 text-center m-auto text-slate-50">
          <a href={"/privacyPolicy"}>
            <p>Privacy Policy</p>
          </a>{" "}
          |
          <a href={"/TermsandConditions"}>
            <p>Terms and Conditions</p>
          </a>
        </div>
      </div>
    </>
  );
};
