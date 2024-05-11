import { z } from "zod";

export const createMyHotelSchema = z.object({
  name: z.string({ required_error: "Hotel name is required." }).min(1, "Hotel name is required."),
  city: z.string({ required_error: "City is required." }).min(1, "City is required."),
  country: z.string({ required_error: "Country is required." }).min(1, "Country is required."),
  description: z.string({ required_error: "Description is required." }).min(1, "Description is required."),
  pricePerNight: z.number({ required_error: "Price is required." }).positive("Must enter the positive value"),
  starRating: z.number({ required_error: "Star rating is required." }).min(1, "Rating can't be less than 1").max(5, "Rating can't be more than 5"),
  hotelType: z.string({ required_error: "Hotel type is required." }).min(1, "Hotel type is required."),
  facilities: z.array(z.string(), { required_error: "Facilities required." }).nonempty(),
  countAdults: z.number({ required_error: "Adults count is required." }).min(1, "Adult number is required"),
  countChildren: z.number({ required_error: "Children count is required." }).min(1, "Children number is required"),
  imagesList: z.instanceof(FileList),
});

export type TCreateMyHotelSchema = z.infer<typeof createMyHotelSchema>;
