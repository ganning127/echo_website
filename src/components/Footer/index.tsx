import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import { NAV_CONTENT } from "../NavBar/NavContent";

export const Footer = () => {
  return (
    <footer className="bg-[#1473d2] text-white px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/navbar_logo.png"
            alt="ECHO Logo"
            width={160}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:edecho.org@gmail.com">edecho.org@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Instagram className="w-4 h-4" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Instagram
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 font-bold text-sm text-white ">
          {NAV_CONTENT.map((item) => {
            return (
              <a key={item.href} href={item.href}>
                <h6 className="text-[24px]">{item.title}</h6>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
