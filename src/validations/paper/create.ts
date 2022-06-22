import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  title: string().required(),
  body: string().required(),
});

export type Schema = InferType<typeof schema>;

export const label: Record<keyof Schema, string> = {
  title: "Title",
  body: "Body",
};
