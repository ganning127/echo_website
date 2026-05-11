import Image from "next/image";


export function ForwardThinkingSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Bangers',sans-serif] text-[#013161] text-[36px] lg:text-[48px] mb-4">
            Heroes Are Always Forward Thinking
          </h2>
          <p className="font-['Lato',sans-serif] text-[#013161] text-[20px] lg:text-[24px] max-w-[900px] mx-auto">
            Echo Heroes know the importance of lifelong heart health. Show your strength by showing up, getting your blood pressure measured, and sharing our events with your family and friends, so that your whole community can become Echo Heroes too!
          </p>
        </div>

        {/* Comic Image */}
        <div className="max-w-[1040px] mx-auto">
          <Image
                                src="/Process of taking your blood pressure Comic ECHO.png"
                                alt="BPAC"
                                width={740}
                                height={740}
                                className="w-full rounded-[10px]"
                              />
        </div>
      </div>
    </section>
  );
}
