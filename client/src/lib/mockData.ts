import { TFacility, THotelType } from "@/types/hotel";
import {
  Accessibility,
  BedIcon,
  Cable,
  CigaretteOffIcon,
  ClockIcon,
  ConciergeBell,
  Dumbbell,
  HazeIcon,
  LandmarkIcon,
  LeafIcon,
  PawPrint,
  PiggyBankIcon,
  Plane,
  ShowerHead,
  SquareParking,
  StarIcon,
  StoreIcon,
  UmbrellaIcon,
  UsersIcon,
  Utensils,
  WavesIcon,
  WifiIcon,
} from "lucide-react";

export const hotelTypes: THotelType[] = [
  {
    id: 1,
    label: "Luxury",
    value: "luxury",
    Icon: StarIcon,
  },
  {
    id: 2,
    label: "Boutique",
    value: "boutique",
    Icon: StoreIcon,
  },
  {
    id: 3,
    label: "Resort",
    value: "resort",
    Icon: UmbrellaIcon,
  },
  {
    id: 4,
    label: "Bed and Breakfast",
    value: "bed-and-breakfast",
    Icon: BedIcon,
  },
  {
    id: 5,
    label: "Eco-Friendly",
    value: "eco-friendly",
    Icon: LeafIcon,
  },
  {
    id: 6,
    label: "Budget",
    value: "budget",
    Icon: PiggyBankIcon,
  },
  {
    id: 7,
    label: "Family",
    value: "family",
    Icon: UsersIcon,
  },
  {
    id: 8,
    label: "Historic Hotel",
    value: "historic",
    Icon: LandmarkIcon,
  },
  {
    id: 9,
    label: "Beachfront Resort",
    value: "beachfront-resort",
    Icon: HazeIcon,
  },
  {
    id: 10,
    label: "Spa Hotel",
    value: "spa",
    Icon: WavesIcon,
  },
];

export const hotelFacilities: TFacility[] = [
  {
    id: 1,
    label: "Parking",
    value: "parking",
    Icon: SquareParking, // Icon for parking from Lucide icon pack
  },
  {
    id: 2,
    label: "Free WiFi",
    value: "free-wifi",
    Icon: WifiIcon, // Icon for free wifi from Lucide icon pack
  },
  {
    id: 3,
    label: "Family Rooms",
    value: "family-rooms",
    Icon: UsersIcon, // Icon for family rooms from Lucide icon pack
  },
  {
    id: 4,
    label: "Non-Smoking Rooms",
    value: "non-smoking-rooms",
    Icon: CigaretteOffIcon, // Icon for non-smoking rooms from Lucide icon pack
  },
  {
    id: 5,
    label: "Pets Allowed",
    value: "pets-allowed",
    Icon: PawPrint, // Icon for pets allowed from Lucide icon pack
  },
  {
    id: 6,
    label: "Swimming Pool",
    value: "swimming-pool",
    Icon: WavesIcon, // Icon for swimming pool from Lucide icon pack
  },
  {
    id: 7,
    label: "Spa and Wellness Centre",
    value: "spa-and-wellness-centre",
    Icon: ShowerHead, // Icon for spa and wellness centre from Lucide icon pack
  },
  {
    id: 8,
    label: "Restaurant",
    value: "restaurant",
    Icon: Utensils, // Icon for restaurant from Lucide icon pack
  },
  {
    id: 9,
    label: "24-Hour Front Desk",
    value: "24-hour-front-desk",
    Icon: ClockIcon, // Icon for 24-hour front desk from Lucide icon pack
  },
  {
    id: 10,
    label: "Wheelchair Accessible",
    value: "wheelchair-accessible",
    Icon: Accessibility, // Icon for wheelchair accessible from Lucide icon pack
  },
  {
    id: 11,
    label: "Airport Shuttle",
    value: "airport-shuttle",
    Icon: Plane, // Icon for airport shuttle from Lucide icon pack
  },
  {
    id: 12,
    label: "Fitness Centre",
    value: "fitness-centre",
    Icon: Dumbbell, // Icon for fitness centre from Lucide icon pack
  },
  {
    id: 13,
    label: "Room Service",
    value: "room-service",
    Icon: ConciergeBell, // Icon for room service from Lucide icon pack
  },
  {
    id: 14,
    label: "Electric Vehicle Charging Station",
    value: "electric-vehicle-charging-station",
    Icon: Cable, // Icon for electric vehicle charging station from Lucide icon pack
  },
];
