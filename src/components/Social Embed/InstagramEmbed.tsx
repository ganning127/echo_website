"use client";

import { useEffect } from "react";

export const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.setAttribute("async", "true");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media max-w-[160px] md:max-w-[540px] rounded-md border-0 bg-white shadow-lg"
      data-instgrm-permalink="https://www.instagram.com/the8minutecallproject/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
    >
      <a
        href="https://www.instagram.com/the8minutecallproject/?utm_source=ig_embed&amp;utm_campaign=loading"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-[#3897f0] text-sm font-medium"
      >
        View this profile on Instagram
      </a>
    </blockquote>
  );
};
