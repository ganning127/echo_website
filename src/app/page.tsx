import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/hero.png)] h-[90vh] w-full bg-no-repeat bg-cover bg-center">
        <NavBar />
      </div>
      <div className="bg-white h-2"></div>
      <main className="bg-[#329D3C] flex justify-center items-center p-8">
        <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg max-w-6xl w-full">
          <div className="w-full md:w-1/3">
            <Image
              src="/run_img.png"
              alt="Welcome to Echoville"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-[48px] font-bold text-black mb-4">
              WELCOME TO ECHOVILLE!
            </h2>
            <p className="text-[24px] text-base leading-relaxed">
              Welcome to Echoville - the land inside a body! It&apos;s a
              thriving and bustling city; we can&apos;t wait to show you around!
              We&apos;ll start out at the <strong>HEART</strong>, the place
              where all the action of life meets rest and care. In Echoville, we
              have four main values that keep all of us here healthy and
              flourishing: <strong>mindfulness</strong>,
              <strong> nutrition</strong>, <strong>rest</strong>, and{" "}
              <strong>movement</strong>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
