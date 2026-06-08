import { getEventBySlug, getAllEvents } from "@/lib/events";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SignupForm } from "@/components/Events/SignupForm";
import { EventInfoBox } from "@/components/Events/EventInfoBox";
import { PaintAndNourishRegistration } from "@/components/Events/registration-paint-and-nourish";
import { RegistrationButton } from "@/components/Events/registration-button";
import Image from "next/image";
import { Testimonial } from "@/components/Events/Testimonial";
import type { Metadata } from "next";
import { EmailSignUpRegistration } from "@/components/Events/EmailSignUpRegistration";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found | ECHO",
    };
  }

  const fm = event.frontmatter;

  const pageUrl = `https://edecho.org/events/${slug}`;

  const imageUrl = fm.image
    ? `https://edecho.org${fm.image}`
    : "https://edecho.org/images/default-event-social.jpg";

  return {
    title: `${fm.title} Event`,

    description: fm.excerpt || fm.description,

    keywords: [
      ...(fm.tags || []),
      "ECHO",
      "heart health",
      "community events",
      "cardiovascular wellness",
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: fm.title,
      description: fm.excerpt || fm.description,
      url: pageUrl,
      siteName: "ECHO",
      type: "website",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fm.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.excerpt || fm.description,
      images: [imageUrl],
    },
  };
}

const components = {
  SignupForm,
  EventInfoBox,
  RegistrationButton,
  Testimonial,
  EmailSignUpRegistration,
};

const registrationComponents = {
  "paint-and-nourish": PaintAndNourishRegistration,
  "email-sign-up": EmailSignUpRegistration,
};

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const { frontmatter: fm, content } = event;

  const RegistrationComponent =
    registrationComponents[
      fm.registrationComponent as keyof typeof registrationComponents
    ];

  return (
    <div className="bg-[#DBECF1] min-h-screen">
      <NavBar />

      {/* HERO */}
      <div className="lg:pt-21 pt-10 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* LEFT COLUMN */}
          <div className="flex-1 text-left">
            {fm.tags && fm.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {fm.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-[#1876d0]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#013161] border border-[#1876d0]/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide  mb-4 text-[#013161] ">
              {fm.title}
            </h1>

            <div className="flex flex-col gap-2 text-[#013161] font-semibold">
              {fm.date && (
                <span>📅 {formatEventDate(fm.date, fm.endDate)}</span>
              )}

              {fm.time && <span>⏰ {fm.time}</span>}
              {fm.location && <span>📍 {fm.location}</span>}
              {fm.ticketPrice && <span>🎟️ {fm.ticketPrice}</span>}
            </div>

            {/* MOBILE/TABLET CTA — hidden on lg+ where sidebar is visible */}
            {fm.hasRegistration && (
              <div className="lg:hidden mt-6">
                {fm.registrationComponent === "email-sign-up" ? (
                  <a
                    href="mailto:info@edecho.org"
                    className="inline-block px-6 py-3 rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide text-sm transition-colors hover:bg-[#1876d0]"
                  >
                    Email Us to Sign Up →
                  </a>
                ) : (
                  <a
                    href="#registration"
                    className="inline-block px-6 py-3 rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide text-sm transition-colors hover:bg-[#1876d0]"
                  >
                    Reserve Your Spot →
                  </a>
                )}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN — Image */}
          <div className="flex-1 w-full p-0 lg:p-16">
            {fm.image ? (
              <div className="relative w-full aspect-[900/691] rounded-2xl overflow-hidden shadow-md p-24">
                <Image
                  src={fm.image}
                  alt={fm.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full aspect-[900/691] rounded-2xl bg-white/50 border border-gray-200 flex items-center justify-center shadow-sm">
                <span className="text-[#013161]/40 text-sm font-medium">
                  No image provided
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className={fm.hasRegistration ? "grid lg:grid-cols-3 gap-12" : ""}>
          {/* MAIN CONTENT */}
          <article
            className="  prose-li:marker:text-[#013161]
  prose-blockquote:border-l-[#013161]
 col-span-2 prose prose-lg max-w-none prose-headings:text-[#013161] prose-headings:uppercase prose-headings:tracking-wide prose-a:text-white"
          >
            <MDXRemote source={content} components={components} />
          </article>

          {/* STICKY SIDEBAR — only visible lg+ */}
          {fm.hasRegistration && (
            <aside className="col-span-1 hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Register Today
                  </h3>

                  <div className="flex flex-col gap-2 text-sm text-[#013161] font-semibold mb-4">
                    {fm.date && (
                      <span>📅 {formatEventDate(fm.date, fm.endDate)}</span>
                    )}

                    {fm.time && <span>⏰ {fm.time}</span>}
                    {fm.location && <span>📍 {fm.location}</span>}
                    {fm.ticketPrice && <span>🎟️ {fm.ticketPrice}</span>}
                  </div>

                  {fm.registrationComponent === "email-sign-up" ? (
                    <a
                      href="mailto:info@edecho.org"
                      className="block text-center rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide text-sm py-3 transition-colors hover:bg-[#1876d0]"
                    >
                      Email Us to Sign Up →
                    </a>
                  ) : (
                    <a
                      href="#registration"
                      className="block text-center rounded-xl bg-[#013161] text-white font-bold uppercase tracking-wide text-sm py-3 transition-colors hover:bg-[#1876d0]"
                    >
                      Reserve Your Spot →
                    </a>
                  )}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* REGISTRATION EMBED — full width, anchor target */}
      {fm.hasRegistration && RegistrationComponent && (
        <div id="registration" className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#013161] mb-8 border-b-2 border-[#013161]/20 pb-4">
            Registration
          </h2>
          <RegistrationComponent />
        </div>
      )}

      <Footer />
    </div>
  );
}
