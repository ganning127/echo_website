import type { Metadata } from "next";
import "./globals.css";

const desc =
  "The Early Cardiovascular Health Outreach (ECHOS) was founded alongside the UCLA Women's Cardiovascular Center in July 2017";
export const metadata: Metadata = {
  title: {
    template: "%s | Early Cardiovascular Health Outreach (ECHOS)",
    default: "Early Cardiovascular Health Outreach (ECHOS)",
  },
  description: desc,
  openGraph: {
    title: "Early Cardiovascular Health Outreach (ECHOS)",
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
