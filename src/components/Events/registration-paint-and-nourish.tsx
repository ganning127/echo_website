"use client";

import Script from "next/script";

export function PaintAndNourishRegistration() {
  return (
    <>
      <div
        style={{ width: "100%", maxWidth: "none" }}
        className="[&>*]:!max-w-none [&>*]:!w-full"
      >
        <div
          data-zeffy-embed
          data-form-url="/embed/ticketing/mindwell-creations-paint-and-nourish"
          style={{ width: "100%", maxWidth: "none" }}
        />
      </div>

      <div data-zeffy-embed-fallback style={{ display: "none" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "300px",
            width: "100%",
            paddingTop: "50px",
          }}
        >
          <iframe
            title="Ticket registration powered by Zeffy"
            src="https://www.zeffy.com/embed/ticketing/mindwell-creations-paint-and-nourish"
            style={{
              position: "absolute",
              border: 0,
              top: 0,
              left: 0,
              width: "100%",
              height: "80%",
            }}
            allow="payment"
          />
        </div>
      </div>

      <Script
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
