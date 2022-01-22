import { yupResolver } from "@hookform/resolvers/yup";
import { useForm as baseUseForm } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

export const useForm = <T>(schema: AnyObjectSchema) => {
  return baseUseForm<T>({ resolver: yupResolver(schema) });
};
