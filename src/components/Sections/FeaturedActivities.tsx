import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import featuredActivities from "@/lib/activities.json";
import { ActivityCard } from "../Cards/ActivityCard";

export const FeaturedActivities = () => {
  const homepageActivities = featuredActivities.filter((activity) =>
    activity.tags?.includes("home")
  );

  return (
    <Carousel className="px-0 lg:px-12">
      <CarouselContent>
        {homepageActivities.map((activity, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <ActivityCard activity={activity} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-[#00A6C5] text-white left-2 lg:-left-0" />
      <CarouselNext className="bg-[#00A6C5] text-white right-2 lg:-right-0" />
    </Carousel>
  );
};
