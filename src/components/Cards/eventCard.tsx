import { Event } from "@/lib/events";
import Link from "next/link";
import Image from "next/image";

function formatEventDate(dateStr: string, endDateStr?: string): string {
  const date = new Date(dateStr);
  const formatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (!endDateStr) return formatted;

  const end = new Date(endDateStr);
  const formattedEnd = end.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `${formatted} – ${formattedEnd}`;
}

export const EventCard = ({
  event,
  isPast = false,
}: {
  event: Event;
  isPast?: boolean;
}) => {
  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <div
        className={`
          flex flex-col md:flex-row
          bg-white border border-gray-200 rounded-2xl
          overflow-hidden shadow-sm
          transition-all duration-300 ease-out
          group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-gray-300
          max-w-6xl mx-auto
          ${isPast ? "opacity-70" : ""}
        `}
      >
        {/* IMAGE */}
        <div className="relative w-full md:w-80 h-64 md:h-auto shrink-0 overflow-hidden">
          {event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[#DBECF1] flex items-center justify-center">
              <span className="text-[#013161]/40 text-sm font-medium">
                ECHO Event
              </span>
            </div>
          )}

          {/* UPCOMING BADGE */}
          {!isPast && (
            <div className="absolute top-3 left-3 bg-[#013161] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Upcoming
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-6 md:p-8 min-w-0 flex-1">
          <div>
            {/* TAGS */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[#1876d0]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#013161] border border-[#1876d0]/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-gray-900 transition-colors duration-200 group-hover:text-[#1876d0] line-clamp-2 text-left">
              {event.title}
            </h3>

            {/* DATE & LOCATION */}
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 mt-3 text-sm font-medium text-[#013161]">
              <span>📅 {formatEventDate(event.date, event.endDate)}</span>

              {event.time && <span>⏰ {event.time}</span>}
              {event.location && <span>📍 {event.location}</span>}
            </div>

            {/* EXCERPT */}
            <p className="text-base text-gray-600 mt-4 leading-relaxed line-clamp-3 text-left">
              {event.excerpt}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 transition-colors duration-200 group-hover:text-[#1876d0]">
              {isPast ? "View Recap" : "Learn More"}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#7C2D36]">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
