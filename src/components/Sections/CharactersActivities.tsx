import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import featuredActivities from "@/lib/activities.json";
import { ActivityCard } from "../Cards/ActivityCard";

type Props = {
  characterName: string;
};

export const CharacterActivities = ({ characterName }: Props) => {
  const filteredActivities = featuredActivities.filter((activity) =>
    activity.tags?.some(
      (tag) => tag.toLowerCase() === characterName.toLowerCase()
    )
  );

  if (filteredActivities.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No activities found for {characterName}.
      </p>
    );
  }

  return (
    <Carousel className="">
      <CarouselContent>
        {filteredActivities.map((activity, index) => (
          <CarouselItem
            key={index}
            className="md:basis-5/6 lg:basis-5/6 m-auto"
          >
            <ActivityCard activity={activity} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#00A6C5] text-white -left-5 sm:left-1" />
      <CarouselNext className="bg-[#00A6C5] text-white -right-5 sm:right-1" />
    </Carousel>
  );
};
