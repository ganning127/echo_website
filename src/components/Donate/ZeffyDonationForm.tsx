"use client";

export default function ZeffyDonationForm() {
  return (
    <div className="relative h-[500px] w-full overflow-y-scroll custom-scrollbar">
      <iframe
        title="Donation form powered by Zeffy"
        src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-5034"
        allow="payment-request"
        data-cookiecategory="necessary"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
