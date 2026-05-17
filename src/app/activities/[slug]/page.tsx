import { Metadata } from "next";
import activities from "@/lib/activities.json";
import ActivityClient from "./activityClient";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return {
      title: "Activity Not Found | ECHO Activities",
    };
  }

  return {
    title: `${activity.title} Activity`,
    description: activity.description,
    keywords: [
      "ECHO activities",
      "kids health education",
      ...(activity.tags ?? []),
      activity.title,
    ],
    openGraph: {
      title: activity.title,
      description: activity.description,
      images: [
        {
          url: activity.image || activity.preview,
          width: 800,
          height: 400,
          alt: activity.title,
        },
      ],
    },
  };
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return null; // or redirect
  }

  return <ActivityClient activity={activity} />;
}