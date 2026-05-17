import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { lato } from "./fonts";
import Silktide from "@/components/Tracking/Silktide";
import GoogleConsent from "@/components/Tracking/GoogleConsent";

export const metadata: Metadata = {
  title: {
    template: "%s | Early Cardiovascular Health Outreach (ECHO)",
    default: "Early Cardiovascular Health Outreach (ECHO)",
  },
  description:
    "Welcome to ECHOVILLE — the land inside your body! ECHO helps kids learn heart-healthy habits through mindfulness, movement, nutrition, and rest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${lato.variable}`}>
        <GoogleConsent />
        <Silktide />
        {/* App content */}
        {children}

        {/* Google Analytics (always loaded, consent-controlled) */}
        <GoogleAnalytics gaId="G-S3G9CP9H0H" />
      </body>
    </html>
  );
}
