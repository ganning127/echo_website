import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/Tracking/GoogleAnalytics";

const desc =
  "The Early Cardiovascular Health Outreach (ECHO) was founded alongside the UCLA Women's Cardiovascular Center in July 2017";
export const metadata: Metadata = {
  title: {
    template: "%s | Early Cardiovascular Health Outreach (ECHO)",
    default: "Early Cardiovascular Health Outreach (ECHO)",
  },
  description: desc,
  openGraph: {
    title: "Early Cardiovascular Health Outreach (ECHO)",
    description: desc,
    url: "edecho.org",
    siteName: "ECHO",
    images: [
      {
        url: "https://echo-website-snowy.vercel.app/hero_og.png",
        width: 1200,
        height: 630,
        alt: "homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          id="silktide-consent-manager-css"
          href="/silktide/silktide-consent-manager.css"
        ></link>
        {/* Load Silktide script */}
        <Script
          src="/silktide/silktide-consent-manager.js"
          strategy="beforeInteractive"
        />

        {/* Initialize Silktide */}
        <Script id="silktide-config" strategy="afterInteractive">
          {`
            silktideCookieBannerManager.updateCookieBannerConfig({
              background: {
                showBackground: false
              },
              cookieIcon: {
                position: "bottomLeft"
              },
              cookieTypes: [
                {
                  id: "necessary",
                  name: "Necessary",
                  description: "<p>These cookies are necessary for the website to function properly and cannot be switched off.</p>",
                  required: true,
                  onAccept: function() {
                    console.log('Necessary cookies accepted');
                  }
                },
                {
                  id: "analytics",
                  name: "Analytics",
                  description: "<p>Tracking to understand site usage.</p>",
                  required: false,
                  onAccept: function() {
                    console.log('Analytics enabled');
                    if (window.__analyticsConsentGranted) {
                      window.__analyticsConsentGranted();
                    }
                  }
                },
                {
                  id: "advertising",
                  name: "Advertising",
                  description: "<p>Personalization + advertising cookies.</p>",
                  required: false,
                  onAccept: function() {
                    console.log('Advertising enabled');
                    if (window.__instagramConsentGranted) {
                      window.__instagramConsentGranted();
                    }
                  },
                  onReject: function() {
                    if (window.__instagramConsentRevoked) {
                      window.__instagramConsentRevoked();
                    }
                  }
                }
              ],
              text: {
                banner: {
                  description: "<p>We use cookies to improve your experience. <a href='/cookie-policy'>Cookie Policy</a></p>",
                  acceptAllButtonText: "Accept all",
                  rejectNonEssentialButtonText: "Reject non-essential",
                  preferencesButtonText: "Preferences"
                }
              },
              position: { banner: "bottomCenter" }
            });
          `}
        </Script>
        <GoogleAnalytics />

        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
