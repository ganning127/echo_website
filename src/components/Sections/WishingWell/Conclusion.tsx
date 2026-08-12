import Image from "next/image";

export function ConclusionSection() {
  return (
  <section className="py-12 md:py-16">
              <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-12">
                
                <div className="md:col-span-3">
                <h1 className="text-3xl md:text-4xl font-heading text-[#013161]">
                  When completed, bring your heart bookmark to a participating location, and find The ECHO Wishing Well. 
                </h1>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  Make a wish upon your heart, then let the librarian know which Pillar you have set an intention for. Pillar stickers will be added to your heart bookmark by the librarian or an ECHO team member before being put into The ECHO Wishing Well. 
                </p>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  Together, we can encourage one another, one heart at a time. Let your impact ECHO and wish your neighbors well with <b>The ECHO Wishing Well: Save Your Spot With A Heart Bookmark Project!</b> 
                </p>

                <h2 className="pt-10 text-1xl md:text-3xl font-heading text-[#013161]">
                  Participating Location
                </h2>
                <div className="flex items-start justify-center items-center gap-3 text-[#013161]">
                  <div className="shrink-0 pt-1">
                    <Image
                      src="/programs/the-echo-wishing-well/majesticons_library-line.svg"
                      alt="ECHO Wishing Well"
                      width={20}
                      height={20}
                      className="w-10 h-10"
                    />
                  </div>
                
                  <div className="flex-1">
                    Mōʻiliʻili Public Library
                  </div>
                </div>
                </div>
                <div className="md:col-span-1 flex"></div>
              <div className="md:col-span-2 text-center">
                <Image
                  src="/programs/the-echo-wishing-well/Save_Your_Spot_With_A_Heart_Instructions.png"
                  alt="ECHO Wishing Well"
                  width={900}
                  height={1165}
                  className="shadow-md rounded-lg md:block hidden w-full h-auto"
                />
                <a href="/activities/save-your-spot-with-a-heart-instructions">
            <button
              className="md:block hidden text-center mt-5 bg-[#013161] text-white px-12 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity font-heading"
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
              
            </section>
  );
}
