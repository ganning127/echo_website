export function DonationSection() {
  return (
    <div className="bg-[#FACA1E] w-full shadow-md">
      <div className="max-w-6xl mx-auto px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p
          className="text-[#013161] text-center sm:text-left"
          style={{
            fontFamily: "'Cookie Supply DEMO', 'Cookie'",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
          }}
        >
          A donation of $10 helps provide the opportunity for a student to be a part of the Echo Explorers program
        </p>
        <a href="http://edecho.org/donate">
        <button
          className="bg-[#013161] text-white px-12 py-3 rounded-xl shadow-md shrink-0 hover:opacity-90 transition-opacity"
          style={{
            fontFamily: "'Cookie Supply DEMO', 'Cookie'",
            fontSize: "1.5rem",
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Donate
        </button>
        </a>
      </div>
    </div>
  );
}
