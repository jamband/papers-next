import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  email: string().required().email().label("Email"),
});

export type Schema = InferType<typeof schema>;

export const label: Required<Schema> = {
  email: schema.fields.email.spec.label as string,
};
