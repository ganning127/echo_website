"use client";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { AboutSection } from "./AboutSection";
import { MissionSection } from "./MissionSection";
import { NewsletterSection } from "./NewsletterSection";

export const AboutTabsSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = searchParams.get("tab") || "about";
  const [tabValue, setTabValue] = React.useState(initialTab);
  const tabs = [
    { value: "about", label: "About Us", component: AboutSection },
    { value: "mission", label: "Mission", component: MissionSection },
    { value: "newsletter", label: "Newsletter", component: NewsletterSection },
  ];

  return (
    <Tabs
      className="w-full"
      value={tabValue}
      onValueChange={(value) => {
        setTabValue(value);
        const params = new URLSearchParams(searchParams);
        params.set("tab", value);
        router.replace(`?${params.toString()}`);
      }}
    >
      <TabsList className="flex w-full p-0 bg-white rounded-none outline-bottom">
        {tabs.map((tab) => {
          const isActive = tabValue.toLowerCase() === tab.value.toLowerCase();
          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value.toLowerCase()}
              className={
                "hover:cursor-pointer flex-1 hover:bg-[#88eafc] text-white text-sm font-bold uppercase text-center py-2  border border-white transition-colors rounded-lg"
              }
            >
              <h2
                className={cn(
                  "text-xl lg:text-[48px]",
                  isActive ? "text-[#00A6C5]" : "text-[#013161]"
                )}
              >
                {tab.label}
              </h2>
            </TabsTrigger>
          );
        })}
      </TabsList>

      <hr className="border-5 border-[#1876D0]" />

      {tabs.map((tab) => {
        const TabComponent = tab.component;
        return (
          <TabsContent
            key={tab.value}
            value={tab.value.toLowerCase()}
            className="p-4"
          >
            <TabComponent />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
