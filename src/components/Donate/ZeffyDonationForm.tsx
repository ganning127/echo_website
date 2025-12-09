"use client";

export default function ZeffyDonationForm() {
  return (
    <div
      style={{
        position: "relative",
        // Allow iframe scroll to be visible
        overflow: "visible",
        height: "500px",
        width: "100%",
      }}
    >
      <iframe
        title="Donation form powered by Zeffy"
        src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-5034"
        allow="payment-request"
        data-cookiecategory="necessary"
        style={{
          position: "absolute",
          border: 0,
          inset: 0,
          width: "100%",
          height: "100%",
          // Force scrollbars to appear on mobile/tablet Safari
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      />
    </div>
  );
}
