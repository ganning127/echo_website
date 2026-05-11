"use client";
import Image from "next/image";
import { Button } from "../ui/button";


export function BPACSection() {
  return (
    <section className="w-full px-6 lg:px-8 py-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-['Bangers',sans-serif] text-white text-[36px] lg:text-[48px] mb-4">
            Heroes Know Their Numbers
          </h2>
          <p className="font-['Lato',sans-serif] text-white text-[20px] lg:text-[24px]">
            All Echo Heroes have their very own ID called a Blood Pressure Awareness Card (BPAC).<br />
            Become an Echo Hero, and you too will have a BPAC to show your super powers!
          </p>
        </div>

        {/* BPAC Card */}
        <div className="bg-white rounded-[10px] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Instructions */}
            <div className="flex-1 p-6 lg:p-12">
              <h3 className="font-['Bangers',sans-serif] text-[#013161] text-[28px] lg:text-[36px] mb-5">
                To begin your hero's journey, follow these steps:
              </h3>
              <ul className="space-y-4 font-['Lato',sans-serif] text-[#013161] text-[20px] lg:text-[24px]">
                <li className="flex gap-3">
                  <span className="text-[#7559a4]">•</span>
                  <span><span className="font-semibold">Print out</span> your very own BPAC.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7559a4]">•</span>
                  <span>Customize your ID however you wish. Don't forget to add in a photo or drawing of yourself!</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7559a4]">•</span>
                  <span>Get your blood pressure measurements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7559a4]">•</span>
                  <span>Fill out your BPAC with the results (systolic, diastolic, and pulse).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7559a4]">•</span>
                  <span>Show your BPAC to your healthcare provider at your next appointment.</span>
                </li>
              </ul>
            </div>

            {/* Right Side - BPAC Card with flip effect */}
            <div className="flex-1 bg-[#bfe6ed] relative flex flex-col items-center justify-center rounded-br-[10px] lg:rounded-bl-none min-h-[400px]">
              
              {/* Action lines fill full container */}
              <Image
                src="/Superhero Action Lines.png"
                alt=""
                fill
                className="object-cover"
              />

              {/* Card + Button on top */}
              <div className="relative z-10 flex flex-col items-center gap-8 p-6 lg:p-10">

                {/* Flip card scene — perspective lives here */}
                <div
                  className="group w-[300px] lg:w-[380px]"
                  style={{ perspective: "1000px" }}
                >
                  {/* The rotating card — holds both faces */}
                  <div
                    className="relative w-full transition-transform duration-700  ease-in-out group-hover:[transform:rotateY(180deg)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front face */}
                    <div
                      className="w-full shadow-lg"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Image
                        src="/ECHO BPAC Front.png"
                        alt="BPAC Front"
                        width={740}
                        height={365}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    {/* Back face — pre-rotated 180° so it starts hidden */}
                    <div
                      className="absolute inset-0 w-full rotate-6 shadow-lg"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg) rotate(6deg)",
                      }}
                    >
                      <Image
                        src="/ECHO BPAC Back.png"
                        alt="BPAC Back"
                        width={740}
                        height={365}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
<a href="/make/ECHO BPAC, Single.pdf">
                 <Button
            className="bg-[#7559a4] text-white font-['Bangers',sans-serif] text-[28px] lg:text-[32px] px-8 lg:px-6 py-4 lg:py-2 rounded-[5px] hover:bg-[#634a8c] transition-colors"
          >Print BPAC
          </Button>
          </a>
                <a className="underline" href="/make/ECHO BPAC, Multiple.pdf">Need more than one BPAC? Print a set of 10 here</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}