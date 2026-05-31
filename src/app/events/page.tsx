import { getAllEvents, splitEvents } from "@/lib/events";
import { EventCard } from "@/components/Cards/eventCard";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | ECHO",
  description:
    "Join ECHO at our upcoming events! From workshops to community outreach, see what we have planned and get involved in cardiovascular wellness.",
  keywords: [
    "ECHO events",
    "cardiovascular wellness events",
    "health workshops",
  ],
};

export default function EventsPage() {
  const allEvents = getAllEvents();

  console.log("ALL EVENTS:", allEvents);

  const { upcoming, past } = splitEvents(allEvents);

  console.log("UPCOMING:", upcoming);
  console.log("PAST:", past);

  return (
    <div className="bg-[#DBECF1] min-h-screen">
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        {/* HERO */}
        <div className="pb-12 text-center lg:pt-36 pt-10">
          <h1 className="text-5xl mb-5">Events</h1>
          <p className="max-w-5/6 md:max-w-4/6 mx-auto text-md md:text-2xl mb-10">
            You’re invited! Check out our ECHO events. Gather your friends and
            family, and schedule some heart-healthy plans!
          </p>
        </div>

        {/* UPCOMING EVENTS */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#013161] mb-8 border-b-2 border-[#013161]/20 pb-4">
            Upcoming Events
          </h2>

          {upcoming.length === 0 ? (
            <div className="text-center py-16 bg-white/50 rounded-2xl border border-gray-200">
              <p className="text-2xl text-gray-500 font-medium">
                🗓️ Come back later!
              </p>
              <p className="text-gray-400 mt-2">
                No upcoming events at the moment — check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} isPast={false} />
              ))}
            </div>
          )}
        </section>

        {/* PAST EVENTS — only shown if there's at least one */}
        {past.length > 0 && (
          <section className="px-6 pb-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-gray-500 mb-8 border-b-2 border-gray-300 pb-4">
              Past Events
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} isPast={true} />
              ))}
            </div>
          </section>
        )}
      </Suspense>

      <Footer />
    </div>
  );
}
