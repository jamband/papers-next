import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  name: string().required().label("Name"),
  email: string().required().email().label("Email"),
  password: string().required().min(8).label("Password"),
  password_confirmation: string().required().label("Confirm Password"),
});

export type Schema = InferType<typeof schema>;

export const label: Required<Schema> = {
  name: schema.fields.name.spec.label as string,
  email: schema.fields.email.spec.label as string,
  password: schema.fields.password.spec.label as string,
  password_confirmation: schema.fields.password_confirmation.spec
    .label as string,
};
