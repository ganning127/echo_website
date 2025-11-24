import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
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
        <div className="bg-[#00488D]">
          <h1 className="text-5xl text-white pb-10 mx-auto text-center pt-12 sm:pt-10">
            ECHO Explorers Program
          </h1>
        </div>
        <div className="bg-[#DBECF1]">
          <section className="bg-[#DBECF1] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 pt-10 px-5 sm:px-0 items-center">
            <div className="col-span-2">
              <h3 className="text-3xl font-heading text-[#00488D]">
                Program Description
              </h3>
              <br></br>
              <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                For 10-weeks, Explorers will learn heart-healthy habits and they
                will see how to utilize this knowledge to help themselves and
                others.
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

          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-5 sm:px-0">
            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl  text-[#00488D] mb-2">Registration</h3>
              <p className="text-lg">Opens December 15, 2025</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl text-[#00488D] mb-2">Location</h3>
              <p className="text-lg">Island Pacific Academy</p>
              <p className="text-lg">909 Haumea St, Kapolei, HI 96707</p>
            </div>
            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl text-[#00488D] mb-2">Schedule</h3>
              <p className="text-lg">10 weeks, Mondays,</p>
              <p className="text-lg">3:00 p.m. – 4:00 p.m.</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl  text-[#00488D] mb-2">Grade Level</h3>
              <p className="text-lg">Students in grades 3-6</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl text-[#00488D] mb-2">Cost</h3>
              <p className="text-lg">$200</p>
            </div>
          </section>
          <div className="mx-auto text-center mt-10 pb-10">
            <a
              className="mx-auto text-center"
              href="https://ipaauxiliary.campbrainregistration.com/"
              target="_blank"
            >
              <Button
                variant="outline"
                className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 mt-4 text-[30px] px-10 py-6 hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
              >
                Register Now
              </Button>
            </a>
            <p className="pt-5">
              You will be redirected to ipaauxiliary.campbrainregistration.com
            </p>
          </div>

          <div className="bg-[#E8F6FA]">
            <section className=" mx-auto py-10 px-10 max-w-6xl">
              <ExplorersTimeline />
            </section>
          </div>
          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 py-10 px-5 sm:px-0">
            <div className="col-span-2">
              <h2 className="text-3xl text-[#00488D] mb-4">How to Register</h2>
              <p className="mb-3 text-lg">
                To register for the program, please create an account on the{" "}
                <a
                  className="text-[#00488D] underline"
                  href="https://ipaauxiliary.campbrainregistration.com/"
                >
                  CAMPBRAIN platform
                </a>
                . If you already have an account, simply log in and select{" "}
                <b>“Spring Enrichment 2026,”</b> then{" "}
                <b>&quot;Echo Explorers.&quot;</b>
              </p>
              <p className="text-lg mb-3">
                Once you submit your enrollment, you will receive an email
                confirming your completed enrollment with your order number.
              </p>

              <p className="text-lg">
                Please keep a record of your order number so that we may best
                assist you if you need to make changes to your enrollment.
              </p>

              <div className="sm:m-0 mx-auto sm:text-left text-center mt-10 pb-10">
                <a
                  className="mx-auto text-center"
                  href="https://ipaauxiliary.campbrainregistration.com/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 mt-4 text-[30px] px-10 py-6 hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
                  >
                    Register Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="col-span-2 flex justify-end">
              <Image
                src="/Echo_Explorers_Program_Registration.png"
                alt="Registration"
                width={535}
                height={285}
                className="pb-5 w-full max-w-[500px] h-auto object-contain"
              />
            </div>
          </section>
          <section>
            <FAQSection></FAQSection>
          </section>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
