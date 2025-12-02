/* eslint-disable @next/next/next-script-for-ga */
"use client";

import { useEffect } from "react";

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    dataLayer?: unknown[];
    __analyticsConsentGranted?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Check if consent was already given (from localStorage)
    const checkInitialConsent = () => {
      const storedConsent = localStorage.getItem(
        "silktideCookieChoice_analytics"
      );
      if (storedConsent === "true") {
        initializeGA();
      }
    };

    // Initialize Google Analytics
    const initializeGA = () => {
      // Prevent double-initialization
      if (window.gtag) {
        return;
      }

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args);
      };

      window.gtag("js", new Date());
      window.gtag("config", "G-S3G9CP9H0H");

      // Load the GA script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-S3G9CP9H0H";
      document.head.appendChild(script);
    };

    checkInitialConsent();

    // Set up a global callback for when analytics consent is granted
    window.__analyticsConsentGranted = () => {
      initializeGA();
    };

    return () => {
      delete window.__analyticsConsentGranted;
    };
  }, []);

  return null; // No need to render anything
};
