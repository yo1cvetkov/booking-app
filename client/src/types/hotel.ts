import { LucideIcon } from "lucide-react";

type THotelType = {
  id: number;
  label: string;
  value: string;
  Icon: LucideIcon;
};

type TFacility = THotelType;

export { type THotelType, type TFacility };
