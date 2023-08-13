import type { Output } from "valibot";
import { email, minLength, object, string } from "valibot";

const field = {
  name: "Name",
  email: "Email",
  password: "Password",
  passwordConfirmation: "Confirm Password",
};

export const schema = object({
  name: string([minLength(1, `The ${field.name} field is required.`)]),
  email: string([email(`The ${field.email} must be a valid email address.`)]),
  password: string([
    minLength(8, `The ${field.password} must be at least 8 characters.`),
  ]),
  password_confirmation: string([
    minLength(1, `The ${field.passwordConfirmation} field is required.`),
  ]),
});

export type Schema = Output<typeof schema>;

export const label: Record<keyof Schema, string> = {
  name: field.name,
  email: field.email,
  password: field.password,
  password_confirmation: field.passwordConfirmation,
};
