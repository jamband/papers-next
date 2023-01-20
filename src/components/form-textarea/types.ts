import type { ComponentProps } from "@/types/component-props";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type Props = ComponentProps<"textarea"> & {
  className?: string;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
};

export type _Props = Props;
