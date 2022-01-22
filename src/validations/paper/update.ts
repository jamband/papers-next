import type { InferType } from "yup";
import { object, string } from "yup";
import "~/validations/locale";

export const schema = object({
  title: string().required().label("Title"),
  body: string().required().label("Body"),
});

export type Schema = InferType<typeof schema>;

export const label: Required<Schema> = {
  title: schema.fields.title.spec.label!,
  body: schema.fields.body.spec.label!,
};
