import type { MutableRefObject } from "react";

export type Props = {
  className?: string;
  label: string;
  type: "email" | "password" | "text";
  name: string;
  inputClass: string;
  feedback: string | undefined;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
  focus?: boolean;
};

export type _Props = Props & {
  id: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};
