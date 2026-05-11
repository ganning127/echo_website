import Image from "next/image";

export function ProgramDescriptionSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-5 xl:px-0 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Text */}
      <div className="flex flex-col gap-4">
        <h2
          className="text-[#013161]"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Program Description
        </h2>
        <div
          className="text-[#013161] space-y-4"
          style={{ fontSize: "1.25rem" }}
        >
          <p>
            Explorers will learn heart-healthy habits and how to utilize them to
            help themselves and others.
          </p>
          <p>
            Each week introduces a new topic through interactive learning,
            games, and creative activities. They will explore mindfulness, the
            importance of taking breaks, staying active, and eating nutritious
            foods through our four pillars:{" "}
            <a href="/about?tab=mission" className="text-[#00488D] underline">
              Mind-Well, Rest-Well, Move-Well, and Eat-Well
            </a>
            .
          </p>
          <p>
            By the end of the program, Explorers will have the confidence to
            lead heart healthy lives.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end">
        <Image
                        src="/echo teachers note.webp"
                        alt="Explorer Character"
                        width={540}
                        height={565}
                        className="m-auto pb-5 w-full max-w-[350px] lg:max-w-[420px] xl:max-w-[480px]"
                      />
      </div>
    </section>
  );
}
