export function ViewInstructionsSection() {
  return (
    <div className="w-full py-10 bg-[#FFDE80]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col items-center gap-6 text-center">
        <h2
          className="text-[#013161] font-heading"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
          }}
        >
          Would you like to share a wish of your own?
        </h2>
<p>You can make your own Save Your Spot With A Heart origami heart bookmark by following our instructions.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="/activities/save-your-spot-with-a-heart-instructions">
            <button
              className="bg-[#013161] text-white px-12 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity font-heading"
              style={{
                fontSize: "1.4rem",
                color: "rgba(255,255,255,0.88)",
              }}
            >
              View Instructions
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
