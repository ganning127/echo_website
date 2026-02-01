import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { ExplorersTimeline } from "@/components/Explorers Timeline/explorersTimeline";
import FAQSection from "@/components/Echo Explorers FAQ/FAQ";

export const metadata: Metadata = {
  title: "Echo Explorers",
  description:
    "Learn about the 10-week Echo Explorers program that teaches heart-healthy habits through interactive activities, games, and more.",
  keywords: [
    "Echo Explorers",
    "Heart Health",
    "Kids Program",
    "Education",
    "Health Program",
  ],
};

export default function EchoExplorers() {
  return (
    <>
      <nav className="bg-[#DBECF1] sticky top-0 z-50">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#00488D] text-white pb-10 mx-auto text-center pt-12 sm:pt-10 gap-5">
          <h1 className="text-5xl ">ECHO Explorers Program</h1>
          <p className="pt-5 px-5">
            Contact us at{" "}
            <a href="mailto:info@EdEcho.org" className="underline">
              info@EdEcho.org
            </a>{" "}
            to bring the ECHO Explorers program to your school or community!
          </p>
        </div>
        <div className="bg-[#DBECF1]">
          <section className="bg-[#DBECF1] w-5/6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 pt-10 px-5 sm:px-0 items-center">
            <div className="col-span-2">
              <h3 className="text-3xl font-heading text-[#00488D]">
                Program Description
              </h3>
              <br></br>
              <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                Explorers will learn heart-healthy habits and how to utilize
                them to help themselves and others.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                {" "}
                Each week introduces a new topic through interactive learning,
                games, and creative activities. They will explore mindfulness,
                the importance of taking breaks, staying active, and eating
                nutritious foods through our four pillars:{" "}
                <a
                  className="text-[#00488D] underline"
                  href="/about?tab=mission"
                >
                  Mind-Well, Rest-Well, Move-Well, and Eat-Well
                </a>
                .{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                By the end of the program, Explorers will have become leaders in
                their community by organizing their own Heart Health Fair!
              </p>
            </div>
            <div className="col-span-1 mx-auto text-center flex justify-end">
              <Image
                src="/Echo Explorers.png"
                alt="Explorer Character"
                width={740}
                height={565}
                className="m-auto pb-5 w-full max-w-[350px] lg:max-w-[420px] xl:max-w-[480px]"
              />
            </div>
          </section>

          <section className="w-5/6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-5 pb-10 sm:px-0">
            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl text-[#00488D] mb-2">Schedule</h3>
              <p className="text-lg">12 session, each 1 hour</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl  text-[#00488D] mb-2">Grade Level</h3>
              <p className="text-lg">Elementary</p>
            </div>
          </section>

          <div className="bg-[#E8F6FA]">
            <section className=" mx-auto pt-10 px-10 max-w-6xl">
              <ExplorersTimeline />
            </section>
          </div>
          <section>
            <FAQSection></FAQSection>
          </section>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
