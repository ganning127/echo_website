import Image from "next/image";


export function HeroSection() {
  return (
    <section className="w-full px-6 lg:px-8 py-10 lg:py-20 lg:pt-36 pt-0">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-end">
          {/* Left Side - Characters and Title */}
          <div className="flex flex-col gap-5 flex-1 min-w-[300px]">
            {/* Program Name */}
            <div className="flex flex-col items-center lg:items-start">
                <Image
                                src="/ECHO BPAC Front.png"
                                alt="BPAC"
                                width={740}
                                height={365}
                                className=" w-full max-w-[350px] lg:max-w-[420px] xl:max-w-[480px]"
                              />
              <p className="font-['Lato',sans-serif] text-white text-[20px] lg:text-[24px] text-center lg:text-left">PROGRAM</p>
              <h1 className="font-['Bangers',sans-serif] text-[#bfe6ed] text-[60px] lg:text-[90px] xl:text-[128px] leading-none text-center lg:text-left">ECHO HEROES</h1>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col gap-5 flex-1">
            <h2 className="font-['Bangers',sans-serif] text-white text-[36px] lg:text-[48px] leading-tight">
              Heroes Do Not Get Taken By Surprise
            </h2>
            <div className="font-['Lato',sans-serif] text-white text-[20px] lg:text-[24px] space-y-4">
              <p>
                There are some surprises in life that are really nice, like surprise parties, surprise gifts, and surprise trips to a park. However, sometimes in life there are surprises that aren't so nice, like bee stings, paper cuts, and high blood pressure! We are going to focus on high blood pressure today.
              </p>
              <p>
                To avoid this surprise, you can have your blood pressure checked at least once a year and keep track of your results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
