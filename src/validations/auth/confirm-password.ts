import type { InferType } from "yup";
import { object, string } from "yup";
import "../locale";

export const schema = object({
  password: string().required(),
});

export type Schema = InferType<typeof schema>;

export const label: Record<keyof Schema, string> = {
  password: "Password",
};
