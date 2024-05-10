import { TRegisterSchema } from "@/schemas/auth";

type TUser = {
  email: string;
  firstName: string;
  lastName: string;
};

type TRegister = Omit<TRegisterSchema, "confirmPassword">;

export { type TUser, type TRegister };
