import type { Output } from "valibot";
import { email, object, string } from "valibot";

const field = {
  email: "Email",
};

export const schema = object({
  email: string([email(`The ${field.email} must be a valid email address.`)]),
});

export type Schema = Output<typeof schema>;

export const label: Record<keyof Schema, string> = {
  email: field.email,
};
