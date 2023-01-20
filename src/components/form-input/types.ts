import type { ComponentProps } from "@/types/component-props";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type SharedProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
};

export type Props = SharedProps & ComponentProps<"input">;

export type _Props = SharedProps & {
  rest: ComponentProps<"input">;
};
