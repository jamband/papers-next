import { yupResolver } from "@hookform/resolvers/yup";
import type { FieldValues } from "react-hook-form";
import { useForm as baseUseForm } from "react-hook-form";
import type { AnyObject, ObjectSchema } from "yup";

export const useForm = <T extends FieldValues>(
  schema: ObjectSchema<AnyObject>
) => {
  return baseUseForm<T>({ resolver: yupResolver(schema) });
};
