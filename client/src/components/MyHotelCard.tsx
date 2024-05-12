import { StarIcon, UserIcon } from "lucide-react";
import { Chip } from "./Chip";
import { Button } from "./ui/button";
import { THotel } from "@/types/hotel";
import { hotelFacilities, hotelTypes } from "@/lib/mockData";
import { Skeleton } from "./ui/skeleton";

interface MyHotelCardProps {
  hotel: THotel;
}

export const MyHotelCard = ({ hotel }: MyHotelCardProps) => {
  const numberOfFilledStars = Array.from({ length: hotel.starRating });

  const numberOfUnfilledStars = Array.from({ length: 5 - hotel.starRating });

  return (
    <div className="transition-all bg-white rounded-lg shadow-md group borderborder-gray-200 hover:shadow-lg">
      <div>
        <img
          alt="Hotel image"
          height={400}
          width={600}
          src={hotel.imageUrls[0]}
          className="object-cover w-full h-48 rounded-t-lg"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {numberOfFilledStars.map((_, index) => (
              <StarIcon key={index} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
            ))}
            {numberOfUnfilledStars.map((_, index) => (
              <StarIcon key={index} className="w-4 h-4 fill-muted stroke-muted-foreground" />
            ))}
          </div>
          <Chip>{hotelTypes.find((hotelType) => hotelType.value === hotel.type)?.label}</Chip>
        </div>
        <div className="flex items-center justify-between py-2">
          <h3 className="text-xl font-semibold ">{hotel.name}</h3>
          <span className="text-sm font-medium">${hotel.pricePerNight} / night</span>
        </div>
        <p className="mb-4 text-gray-500">{hotel.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Chip>
            {hotel.city}, {hotel.country}
          </Chip>
          {hotel.facilities.map((facility, index) => (
            <Chip key={index}>{hotelFacilities.find((facilityType) => facilityType.value === facility)?.label}</Chip>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            <span className="text-sm">
              {hotel.adultCount} {hotel.adultCount === 1 ? "adult" : "adults"}, {hotel.childCount} {hotel.childCount === 1 ? "child" : "children"}
            </span>
          </div>
          <Button className="pr-0 underline underline-offset-2 text-primary" size={"sm"} variant={"link"}>
            View details
          </Button>
        </div>
      </div>
    </div>
  );
};

MyHotelCard.Skeleton = function MyHotelCardSkeleton() {
  return (
    <div className="transition-all bg-white rounded-lg shadow-md group borderborder-gray-200 hover:shadow-lg">
      <div>
        <Skeleton className="object-cover w-full h-48 rounded-t-lg" style={{ aspectRatio: "600/400", objectFit: "cover" }} />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
              ))}
            </div>
            <Skeleton className="w-20 h-4" />
          </div>
          <div className="flex items-center justify-between py-3 gap-x-10">
            <Skeleton className="w-full h-6" />
            <Skeleton className="w-20 h-6" />
          </div>
          <Skeleton className="w-1/2 h-4" />
          <div className="flex flex-wrap gap-2 mt-6 mb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="w-20 h-6" />
            ))}
          </div>
          <div className="flex items-center justify-between mt-8">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
