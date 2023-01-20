import type { ComponentProps } from "@/types/component-props";

export type Props = ComponentProps<"button"> & {
  color?: "green" | "red";
  className?: string;
  children: React.ReactNode;
};

export type _Props = Props;
