"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export const ActivityCard = ({
  activity,
}: {
  activity: {
    tags?: string[];
    title: string;
    description: string;
    image: string;
    link: string;
    slug: string;
  };
}) => {
  if (activity.tags) {
    activity.tags = activity.tags.filter((tag: string) => tag !== "home");
  }
  return (
    <div className="text-center bg-white rounded-lg shadow-lg">
      <Image
        src={activity.image}
        alt={activity.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex flex-row gap-2 items-center mb-2">
          {activity.tags?.map((tag: string) => {
            return (
              <p
                key={tag}
                className="bg-[#00A6C5]/75 text-white text-[14px] px-2 py-1 rounded-lg"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <h3 className="text-[25px] mb-2">{activity.title}</h3>
        <p className="text-[15px] text-gray-700 line-clamp-2">
          {activity.description}
        </p>
        <a href={`/activities/${activity.slug}`} target="_blank">
          <Button
            variant="outline"
            className="mt-4 text-[24px] bg-[#00A6C5] text-white font-heading"
          >
            Read More
          </Button>
        </a>
      </div>
    </div>
  );
};
