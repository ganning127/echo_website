export interface CalendarPage {
  slug: string;
  title: string;
  preview: string;
  pdf: string;
}

export const calendarPages: CalendarPage[] = [
  {
    slug: "january-2026",
    title: "January 2026",
    preview: "/calendar/january-2026/preview.jpg",
    pdf: "/calendar/january-2026/ECHO_Calendar_January_2026.pdf",
  },
  {
    slug: "february-2026",
    title: "February 2026",
    preview: "/calendar/february-2026/preview.jpg",
    pdf: "/calendar/february-2026/ECHO_Calendar_February_2026.pdf",
  },
  {
    slug: "march-2026",
    title: "March 2026",
    preview: "/calendar/march-2026/preview.jpg",
    pdf: "/calendar/march-2026/ECHO_Calendar_March_2026.pdf",
  },
  {
    slug: "april-2026",
    title: "April 2026",
    preview: "/calendar/april-2026/preview.jpg",
    pdf: "/calendar/april-2026/ECHO_Calendar_April_2026.pdf",
  },
  {
    slug: "may-2026",
    title: "May 2026",
    preview: "/calendar/may-2026/preview.jpg",
    pdf: "/calendar/may-2026/ECHO_Calendar_May_2026.pdf"
  }
];
