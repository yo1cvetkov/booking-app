import { TLoginSchema, TRegisterSchema } from "@/schemas/auth";

type TUser = {
  email: string;
  firstName: string;
  lastName: string;
};

type TRegister = Omit<TRegisterSchema, "confirmPassword">;
type TLogin = TLoginSchema;

export { type TUser, type TRegister, type TLogin };
