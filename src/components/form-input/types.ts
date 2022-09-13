import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type { ComponentProps } from "~/types/component-props";

type SharedProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
};

export type Props = SharedProps & ComponentProps<"input">;

export type _Props = SharedProps & {
  rest: ComponentProps<"input">;
};
