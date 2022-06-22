import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type { ComponentProps } from "../../types/component-props";

export type Props = ComponentProps<"input"> & {
  className?: string;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
};

export type _Props = Props;
