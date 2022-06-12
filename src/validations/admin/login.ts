import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  email: string().required().email().label("Email"),
  password: string().required().label("Password"),
});

export type Schema = InferType<typeof schema>;

export const label: Required<Schema> = {
  email: schema.fields.email.spec.label as string,
  password: schema.fields.password.spec.label as string,
};
