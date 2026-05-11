// components/Tracking/Klaviyo.tsx
import Script from "next/script";

export default function Klaviyo() {
  return (
    <Script
      src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID}`}
      strategy="afterInteractive"
    />
  );
}