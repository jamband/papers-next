import { yupResolver } from "@hookform/resolvers/yup";
import type { FieldValues } from "react-hook-form";
import { useForm as baseUseForm } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

export const useForm = <T extends FieldValues>(schema: AnyObjectSchema) => {
  return baseUseForm<T>({ resolver: yupResolver(schema) });
};
