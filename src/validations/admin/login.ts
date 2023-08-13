import type { Output } from "valibot";
import { email, minLength, object, string } from "valibot";

const field = {
  email: "Email",
  password: "Password",
};

export const schema = object({
  email: string([email(`The ${field.email} must be a valid email address.`)]),
  password: string([minLength(1, `The ${field.password} field is required.`)]),
});

export type Schema = Output<typeof schema>;

export const label: Record<keyof Schema, string> = {
  email: field.email,
  password: field.password,
};
