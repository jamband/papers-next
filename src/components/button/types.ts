import type { ButtonHTMLAttributes } from "react";

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "green" | "red";
  children: React.ReactNode;
};

export type _Props = Props;
