"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export const ActivityCard = ({
  activity,
}: {
  activity: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}) => {
  return (
    <div className="text-center bg-white rounded-lg shadow-md">
      <Image
        src={activity.image}
        alt={activity.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
        <p className="text-gray-700">{activity.description}</p>
        <a href={activity.link}>
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
