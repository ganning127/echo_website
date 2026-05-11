export function HeroSection() {
  return (
    <div className="bg-[#00488D] text-white w-full lg:pt-36 pt-5">
      <div className="max-w-6xl mx-auto px-5 xl:px-0 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        {/* Left: Title */}
        <div className="flex flex-col text-center sm:text-left">
          <p
            className="text-white uppercase tracking-wide"
            style={{ fontSize: "1.25rem" }}
          >
            PROGRAM
          </p>
          <h1
            className="text-white leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
            }}
          >
            ECHO Explorers
          </h1>
        </div>

        {/* Right: Contact + Button */}
        <div className="flex flex-col items-start md:items-center gap-4 max-w-sm md:max-w-md">
          <p
            className="text-white text-center"
            style={{ fontSize: "1.25rem" }}
          >
            Contact us to bring the ECHO Explorers program to your school or
            community!
          </p><a href="https://www.edecho.org/contact/partner">
          <button
            className="bg-[#FACA1E] text-[#013161] px-12 py-3 rounded-lg w-full transition-opacity hover:opacity-90"
            style={{
              fontSize: "1.5rem",
            }}
          >
            <p className="font-heading">Fill out interest form</p>
          </button></a>
        </div>
      </div>
    </div>
  );
}