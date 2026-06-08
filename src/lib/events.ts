import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Event = {
    slug: string;
    title: string;
    date: string;
    endDate?: string;
    location?: string;
    description?: string;
    image?: string;
    tags?: string[];
    excerpt?: string;
    ticketPrice?: string; // e.g. "$60.00" or "Free"
    hasRegistration?: boolean;
    registrationComponent?: string;
    time?: string; // e.g. "6:00 PM - 8:00 PM"
};

const eventsDir = path.join(process.cwd(), "src/content/events");

export function getAllEvents(): Event[] {
    if (!fs.existsSync(eventsDir)) return [];

    const files = fs.readdirSync(eventsDir).filter((f) => f.endsWith(".mdx"));

    return files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const raw = fs.readFileSync(path.join(eventsDir, filename), "utf8");
        const { data } = matter(raw);

        return {
            slug,
            title: data.title ?? "Untitled Event",
            date: data.date ?? "",
            time: data.time ?? "",
            endDate: data.endDate,
            location: data.location,
            image: data.image,
            tags: data.tags ?? [],
            excerpt: data.excerpt ?? data.description ?? "",
            ticketPrice: data.ticketPrice,


            hasRegistration: data.hasRegistration ?? false,
            registrationComponent: data.registrationComponent,
        };
    });
}

export function getEventBySlug(slug: string) {
    const filePath = path.join(eventsDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    return {
        slug,
        frontmatter: data as Omit<Event, "slug">,
        content,
    };
}

export function splitEvents(events: Event[]) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const upcoming = events
        .filter((e) => {
            const end = e.endDate ? new Date(e.endDate) : new Date(e.date);
            return end >= now;
        })
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const past = events
        .filter((e) => {
            const end = e.endDate ? new Date(e.endDate) : new Date(e.date);
            return end < now;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { upcoming, past };
}