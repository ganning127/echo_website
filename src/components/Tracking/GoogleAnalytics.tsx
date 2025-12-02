"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __analyticsConsentGranted?: () => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    const initializeGA = () => {
      // Prevent double-loading by checking if GA script is already present
      const gaAlreadyLoaded = !!document.querySelector(
        'script[src*="www.googletagmanager.com/gtag/js"]'
      );

      if (gaAlreadyLoaded) {
        console.log("GA already loaded — skipping init");
        return;
      }

      // Create dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        window.dataLayer.push(args);
      };

      // Load GA script
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-S3G9CP9H0H";
      script.async = true;

      script.onload = () => {
        window.gtag("js", new Date());
        window.gtag("config", "G-S3G9CP9H0H");

        window.gtag("event", "page_view", {
          page_location: window.location.href,
        });
      };

      document.head.appendChild(script);
    };

    // Check consent at load
    const storedConsent = localStorage.getItem(
      "silktideCookieChoice_analytics"
    );
    if (storedConsent === "true") initializeGA();

    // Allow Silktide to trigger GA later
    window.__analyticsConsentGranted = initializeGA;

    return () => {
      delete window.__analyticsConsentGranted;
    };
  }, []);

  return null;
};
