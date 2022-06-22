import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  name: string().required(),
  email: string().required().email(),
  password: string().required().min(8),
  password_confirmation: string().required().label("confirm password"),
});

export type Schema = InferType<typeof schema>;

export const label: Record<keyof Schema, string> = {
  name: "Name",
  email: "Email",
  password: "Password",
  password_confirmation: "Confirm Password",
};
