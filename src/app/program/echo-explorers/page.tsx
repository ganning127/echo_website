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
};

export default function EchoExplorers() {
  return (
    <>
      <nav className="bg-[#DBECF1] w-full">
        <NavBar />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#DBECF1]">
          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 pt-10 px-5 sm:px-0">
            <div className="col-span-2">
              <h1 className="text-4xl text-[#00488D] mb-4">
                ECHO Explorers Program
              </h1>
              <br></br>
              <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                For 10-weeks, Explorers will learn heart-healthy habits and they
                will see how to use this knowledge to help themselves and
                others. Each week introduces a new topic through interactive
                learning, games, and creative activities. They will{" "}
                <i>explore</i> mindfulness, the importance of taking breaks,
                staying active, and eating nutritious foods through our four
                pillars: Mind-Well, Rest-Well, Eat-Well, and Move-Well. By the
                end of the program, Explorers will have become leaders in their
                community by organizing their own Heart Health Fair!
              </p>
            </div>
            <div className="col-span-1 mx-auto text-center flex justify-end">
              <Image
                src="/Echo Explorers.png"
                alt="ECHO Logo"
                width={740}
                height={565}
                className="m-auto pb-5 sm:w-auto w-[50%]"
              />
            </div>
          </section>

          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-5 sm:px-0">
            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl  text-[#00488D] mb-2">Registration</h3>
              <p className="text-lg">Opens December 15, 2025</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl text-[#00488D] mb-2">Schedule</h3>
              <p className="text-lg">10 weeks, Mondays</p>
              <p className="text-lg">3:00 p.m. – 4:00 p.m.</p>
            </div>

            <div className="bg-white  rounded-2xl p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
              <h3 className="text-2xl  text-[#00488D] mb-2">Grade Level</h3>
              <p className="text-lg">Students in grades 3 to 6</p>
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
                className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 mt-4 text-[20px] px-10 py-6 hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
              >
                Register Now
              </Button>
            </a>
          </div>

          <div className="bg-[#E8F6FA]">
            <section className=" mx-auto py-10 px-10 max-w-6xl">
              <ExplorersTimeline />
            </section>
          </div>
          <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-5 sm:px-0">
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
                . If you already have an account, simply log in., and Select{" "}
                <b>“Spring Enrichment 2026.”</b>
              </p>
              <p className="text-lg">
                Once you submit your enrollment, you will receive an email
                confirming your completed enrollment with your order number.
                Please keep a record of your order number so that we may best
                assist you if you need to make changes to your enrollment.
              </p>

              <a
                href="https://ipaauxiliary.campbrainregistration.com/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 mt-4 text-[20px] px-10 py-6 hover:text-white hover:bg-[#00488D] bg-[#00A6C5] text-white font-heading"
                >
                  Register Now
                </Button>
              </a>
            </div>
            <div className="col-span-2">
              <Image
                src="/How to register.png"
                alt="Registration"
                width={535}
                height={385}
                className="right-0 sm:m-0 pb-5"
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
