"use client";

import Script from "next/script";

export default function Silktide() {
  return (
    <>
      {/* Silktide CSS */}
      <link rel="stylesheet" href="/silktide/silktide-consent-manager.css" />

      {/* Silktide mount point */}
      <div id="silktide-wrapper" suppressHydrationWarning />

      {/* Silktide script + config */}
      <Script
        src="/silktide/silktide-consent-manager.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.silktideCookieBannerManager?.updateCookieBannerConfig({
            background: { showBackground: false },
            cookieIcon: { position: "bottomLeft" },
            cookieTypes: [
              {
                id: "necessary",
                name: "Necessary",
                description:
                  "<p>These cookies are required for the website to function properly.</p>",
                required: true,
              },
              {
                id: "analytics",
                name: "Analytics",
                required: false,
                description: "<p>Tracking to understand site usage.</p>",
                onAccept: function () {
                  if (window.gtag) {
                    window.gtag("consent", "update", {
                      analytics_storage: "granted",
                    });
                  }
                },
                onReject: function () {
                  if (window.gtag) {
                    window.gtag("consent", "update", {
                      analytics_storage: "denied",
                    });
                  }
                },
              },
              {
                id: "advertising",
                name: "Advertising",
                description: "<p>Personalization + advertising cookies.</p>",
                required: false,
                onAccept: function () {
                  if (window.gtag) {
                    window.gtag("consent", "update", {
                      ad_storage: "granted",
                      ad_user_data: "granted",
                      ad_personalization: "granted",
                    });
                  }
                },
                onReject: function () {
                  if (window.gtag) {
                    window.gtag("consent", "update", {
                      ad_storage: "denied",
                      ad_user_data: "denied",
                      ad_personalization: "denied",
                    });
                  }
                },
              },
            ],
            text: {
              banner: {
                description:
                  "<p>We use cookies to improve your experience. <a href='/cookie-policy'>Cookie Policy</a></p>",
                acceptAllButtonText: "Accept all",
                rejectNonEssentialButtonText: "Reject non-essential",
                preferencesButtonText: "Preferences",
              },
            },
            position: { banner: "bottomCenter" },
          });

          // Accessibility patch for Silktide modal close button
          const observer = new MutationObserver(() => {
            const closeButton = document.querySelector(".modal-close");
            if (closeButton && !closeButton.getAttribute("aria-label")) {
              closeButton.setAttribute(
                "aria-label",
                "Close cookie preferences",
              );
            }
          });

          observer.observe(document.body, { childList: true, subtree: true });
        }}
      />
    </>
  );
}
