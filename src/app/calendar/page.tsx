import Image from "next/image";
import { calendarPages } from "@/data/calendarPages";
import { NavBar } from "@/components/NavBar";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 ECHO and Friends Calendar",
  description:
    "Print out the monthly calendars and use the extra space to add your own heart-healthy reminders. Come back each month to build your own, original 2026 ECHO and Friends Calendar.",
  keywords: [
    "ECHO calendar",
    "2026 calendar",
    "holidays",
  ],
};
export default function Calendar() {
  return (
    <>
      <nav className="bg-[#DBECF1] sticky top-0 z-50">
        <NavBar />
      </nav>
      <Container className="bg-[#dbecf1]">
        <div className="text-center pb-10 lg:pt-24 pt-0">
          <h1 className="text-[8vw] sm:text-[4vw] font-heading mb-1">
            2026 ECHO and Friends Calendar
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Print out the monthly calendars and use the extra space to add your
            own heart-healthy reminders. Come back each month to build your own,
            original 2026 ECHO and Friends Calendar.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto pb-16">
          {calendarPages.map((page) => (
            <div
              key={page.slug}
              className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition"
            >
              <Image
                src={page.preview}
                alt={page.title}
                width={500}
                height={650}
                className="rounded-lg mb-4 mx-auto"
              />

              <h2 className="text-xl font-heading mb-3">{page.title}</h2>

              <div className="flex flex-col gap-3 justify-center ">
                {/* DOWNLOAD */}
                <Button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105  text-[20px] px-10 py-6 hover:text-black hover:bg-[#ffd87a] bg-[#013161] text-white font-heading">
                  <a
                    href={page.pdf}
                    download
                    className="font-heading px-5 py-2 inline-block"
                  >
                    Download Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
