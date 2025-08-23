import type { Route } from "next";

export type Props = {
  href: Route;
  className?: string;
  children: React.ReactNode;
};

export type _Props = Props;
