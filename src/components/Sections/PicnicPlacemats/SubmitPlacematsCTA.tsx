export function SubmitPlacematsCTA() {
  return (
    <div className="bg-[#FACA1E] w-full shadow-md">
      <div className="max-w-5/6 mx-auto py-6 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6">
        <div className="col-span-2 pr-24">
        <p
          className="text-[#013161] text-center sm:text-left font-heading"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 1rem)",
          }}
        >
          Completed placemats have the chance to be featured on ECHO's website and social media pages. </p>
          <p> To submit a placemat, snap a photo and email it to info@edecho.org.
        </p>
        </div>
        <div className="col-span-1 flex justify-center mx-auto text-center">
        <a href="mailto:info@edecho.org">
        <button
          className="bg-[#013161] font-heading text-white px-12 py-3 rounded-xl shadow-md shrink-0 hover:opacity-90 transition-opacity"
          style={{
            fontSize: "1.5rem",
            color: "rgba(255,255,255,0.88)",
          }}
        >
            Submit Placemat
        </button>
        </a>
        </div>
      </div>
    </div>
  );
}
