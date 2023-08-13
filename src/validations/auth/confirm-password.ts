import type { Output } from "valibot";
import { minLength, object, string } from "valibot";

const field = {
  password: "Password",
};

export const schema = object({
  password: string([minLength(1, `The ${field.password} field is required.`)]),
});

export type Schema = Output<typeof schema>;

export const label: Record<keyof Schema, string> = {
  password: field.password,
};
