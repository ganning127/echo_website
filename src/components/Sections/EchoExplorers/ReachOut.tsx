export function ReachOutSection() {
  return (
    <div className="w-full py-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center gap-6 text-center">
        <h2
          className="text-[#013161]"
          style={{
            fontFamily: "'Cookie Supply DEMO', 'Cookie'",
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
          }}
        >
          Reach out to bring Echo Explorers to your school or community
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          <a href="https://www.edecho.org/contact/partner"><button
            className="bg-[#013161] text-white px-12 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity font-heading"
            style={{
              fontSize: "1.4rem",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Partner with us
          </button></a>
          <a href="https://www.edecho.org/contact/general">
          <button
            className="font-heading bg-transparent text-[#013161] px-12 py-3 rounded-xl border-4 border-[#013161] shadow-md hover:bg-[#013161] hover:text-white transition-colors"
            style={{
              fontSize: "1.4rem",
            }}
          >
            Ask us a question
          </button></a>
        </div>
      </div>
    </div>
  );
}
