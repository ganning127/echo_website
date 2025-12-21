"use client";

import { useEffect } from "react";

export default function GoogleConsent() {
  useEffect(() => {
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function gtag(...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args);
      }
    }

    // Default: deny all storage
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }, []);

  return null;
}
