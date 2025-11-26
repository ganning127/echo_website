"use client";

export default function ZeffyDonationForm() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "450px",
        width: "100%",
      }}
    >
      <iframe
        title="Donation form powered by Zeffy"
        src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-5034"
        allow="payment-request"
        style={{
          position: "absolute",
          border: 0,
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
