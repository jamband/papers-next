import { valibotResolver } from "@hookform/resolvers/valibot";
import type { FieldValues } from "react-hook-form";
import { useForm as baseUseForm } from "react-hook-form";
import type { ObjectSchema, ObjectShape } from "valibot";

export const useForm = <T extends FieldValues>(
  schema: ObjectSchema<ObjectShape, T>,
) => {
  return baseUseForm<T>({ resolver: valibotResolver(schema) });
};
