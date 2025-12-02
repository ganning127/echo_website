"use client";

import { useEffect, useState } from "react";

// Extend the Window interface to include custom properties
declare global {
  interface Window {
    __instagramConsentGranted?: () => void;
    __instagramConsentRevoked?: () => void;
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export const InstagramEmbed = () => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if consent was already given (from localStorage)
    const checkInitialConsent = () => {
      const storedConsent = localStorage.getItem(
        "silktideCookieChoice_advertising"
      );
      if (storedConsent === "true") {
        setHasConsent(true);
      }
    };

    checkInitialConsent();

    // Set up a global callback for when consent is granted
    // This will be called by Silktide's onAccept callback
    window.__instagramConsentGranted = () => {
      setHasConsent(true);
    };

    window.__instagramConsentRevoked = () => {
      setHasConsent(false);
    };

    return () => {
      delete window.__instagramConsentGranted;
      delete window.__instagramConsentRevoked;
    };
  }, []);

  useEffect(() => {
    if (hasConsent) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      document.body.appendChild(script);

      // Process existing Instagram embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [hasConsent]);

  return (
    <blockquote
      data-cookiecategory="advertising"
      className="instagram-media max-w-[160px] md:max-w-[540px] rounded-md border-0 bg-white shadow-lg"
      data-instgrm-permalink="https://www.instagram.com/the8minutecallproject/"
      data-instgrm-version="14"
    >
      {/* fallback for users who reject ads */}
      <a
        href="https://www.instagram.com/the8minutecallproject/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View this post on Instagram
      </a>
    </blockquote>
  );
};
