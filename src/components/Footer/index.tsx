"use client";

import Image from "next/image";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { NAV_CONTENT } from "../NavBar/NavContent";
import { NewsletterStripFooter } from "../Sections/NewsletterStripFooter";

export const Footer = () => {
  return (
    <>
      <NewsletterStripFooter></NewsletterStripFooter>
      <footer className="bg-[#1473d2] text-white px-8 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4">
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
            <p className="mb-5">EIN: 99-3101733</p>
          </div>

          <div className="col-span-1 sm:block hidden">
            <h1 className="text-[30px]">Connect</h1>
            <div className="flex items-center pb-3 gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@edecho.org">info@EdEcho.org</a>
            </div>
            <div className="flex items-center gap-2 text-sm pb-3">
              <Instagram className="w-4 h-4" />
              <a
                href="https://instagram.com/edechoorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                @EdEchoOrg
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4" />
              <a
                href="https://www.linkedin.com/company/early-cardiovascular-health-outreach"
                target="_blank"
                rel="noopener noreferrer"
              >
                ECHO
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
              <a href="/donate" className="block">
                <p className="font-heading sm:font-body sm:text-[15px] text-[20px]">
                  Donate
                </p>
              </a>
              <a href="/calendar" className="block">
                <p className="font-heading sm:font-body sm:text-[15px] text-[20px]">
                  Calendar
                </p>
              </a>
            </div>
          </div>
          <div className="col-span-1  mx-auto">
            <a
              href="https://app.candid.org/profile/16399760/early-cardiovascular-health-outreach-99-3101733"
              target="_blank"
            >
              <Image
                src="/Candid_Silver.svg"
                alt="Candid"
                width={500}
                height={500}
                className="m-auto pb-5 w-full"
              />
            </a>
          </div>
        </div>
        <hr className="my-5 sm:block hidden"></hr>
        <div className="max-w-7xl mx-auto sm:grid grid-cols-3 gap-4 hidden">
          <div className="col-span-2">
            <p className="text-sm">
              &copy; 2026 Early Cardiovascular Health Outreach
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
              aria-label="Visit our Instagram page"
              className="w-10 h-10 bg-[#FFD87A] rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <Instagram className="w-5 h-5 text-black" />
            </a>

            {/* Mail */}
            <a
              href="mailto:info@edecho.org"
              aria-label="Email EDECHO"
              className="w-10 h-10 bg-[#FFD87A] rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <Mail className="w-5 h-5 text-black" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/early-cardiovascular-health-outreach"
              aria-label="Visit our LinkedIn page"
              className="w-10 h-10 bg-[#FFD87A] rounded-full flex items-center justify-center hover:opacity-80 transition"
            >
              <Linkedin className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>

        <div className="col-span-3 text-slate-50">
          <p className="text-md text-center">
            &copy; 2026 Early Cardiovascular Health Outreach
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
