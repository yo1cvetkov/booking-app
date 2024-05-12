import { LucideIcon } from "lucide-react";

type THotelType = {
  id: number;
  label: string;
  value: string;
  Icon: LucideIcon;
};

type TFacility = THotelType;

type THotel = {
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
};

export { type THotelType, type TFacility, type THotel };
