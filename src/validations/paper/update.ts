import type { Output } from "valibot";
import { minLength, object, string } from "valibot";

const field = {
  title: "Title",
  body: "Body",
};

export const schema = object({
  title: string([minLength(1, `The ${field.title} field is required.`)]),
  body: string([minLength(1, `The ${field.body} field is required.`)]),
});

export type Schema = Output<typeof schema>;

export const label: Record<keyof Schema, string> = {
  title: field.title,
  body: field.body,
};
