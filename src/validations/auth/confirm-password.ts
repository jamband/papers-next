import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  password: string().required().label("Password"),
});

export type Schema = InferType<typeof schema>;

export const label: Required<Schema> = {
  password: schema.fields.password.spec.label!,
};
