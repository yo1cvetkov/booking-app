import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string({ required_error: "First name is required" }).min(2, "Min 2 characters long"),
    lastName: z.string({ required_error: "Last name is required" }).min(2, "Min 2 characters long"),
    email: z.string({ required_error: "Email is required." }).email(),
    password: z.string({ required_error: "Password is required." }).min(6, { message: "Password must be at least 6 characters long." }),
    confirmPassword: z.string({ required_error: "Please re-type your password." }).min(6, "Password must be at least 6 characters long."),
  })
  .refine((data) => data.password === data.confirmPassword, { message: "Passwords must match.", path: ["confirmPassword"] });

export type TRegisterSchema = z.infer<typeof registerSchema>;
