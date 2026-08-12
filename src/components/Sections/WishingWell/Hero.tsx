import Image from "next/image";

export function HeroSection() {
  return (
  <section className="md:pt-16">
              <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
                
                <div className="md:col-span-2 col-order-1 md:order-2">
                <h1 className="text-3xl md:text-5xl font-heading text-[#013161]">
                  The ECHO Wishing Well: <br></br>Save Your Spot With A Heart!
                </h1>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed pb-2">
                  Receive a wish by picking up a Save Your Spot With a Heart Bookmark! Friends of Early Cardiovascular Health Outreach (ECHO) have folded origami heart bookmarks for the library. When you visit the library, ask the librarian for The ECHO Wishing Well. Each bookmark features a different colored sticker representing one of ECHO’s Four Pillars:
                </p>
                <div className="grid md:gap-4 md:grid-cols-4 pt-2">
<div className="md:col-span-1">
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                   {/* Mind-Well Pillar */}
                            <div className=" flex items-center gap-3 text-[#013161]">
                    <div className="shrink-0 pt-1">
                      <Image
                        src="/programs/the-echo-wishing-well/MindWell.png"
                        alt="ECHO Wishing Well"
                        width={20}
                        height={20}
                        className="w-10 h-10"
                      />
                    </div>
                  
                    <div className="flex-1 font-bold">
                      Mind-Well
                    </div>
                  </div>
                   {/* Eat-Well Pillar */}
                            <div className="flex items-center gap-3 text-[#013161]">
                    <div className="shrink-0 pt-1">
                      <Image
                        src="/programs/the-echo-wishing-well/EatWell.png"
                        alt="ECHO Wishing Well"
                        width={20}
                        height={20}
                        className="w-10 h-10"
                      />
                    </div>
                  
                    <div className="flex-1 font-bold">
                      Eat-Well
                    </div>
                  </div>
                  </ul>
</div>
<div className="md:col-span-3">
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
               
                 {/* Rest-Well Pillar */}
                           <div className="flex items-center gap-3 text-[#013161]">
                   <div className="shrink-0 pt-1">
                     <Image
                       src="/programs/the-echo-wishing-well/RestWell.png"
                       alt="ECHO Wishing Well"
                       width={20}
                       height={20}
                       className="w-10 h-10"
                     />
                   </div>
                 
                   <div className="flex-1 font-bold">
                     Rest-Well
                   </div>
                 </div>
                 {/* Move-Well Pillar */}
                           <div className=" flex items-center gap-3 text-[#013161]">
                   <div className="shrink-0 pt-1">
                     <Image
                       src="/programs/the-echo-wishing-well/MoveWell.png"
                       alt="ECHO Wishing Well"
                       width={20}
                       height={20}
                       className="w-10 h-10"
                     />
                   </div>
                 
                   <div className="flex-1 font-bold">
                     Move-Well
                   </div>
                 </div>
                  </ul>
</div>
                </div>
                </div>
              <div className="md:col-span-1 flex col-order-2 md:order-1">
                <Image
                  src="/programs/the-echo-wishing-well/Save_Your_Spot_With_A_Heart_Featured_Image.png"
                  alt="ECHO Wishing Well"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
                </div>
              </div>
              
            </section>
  );
}
