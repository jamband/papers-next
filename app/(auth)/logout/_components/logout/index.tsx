"use client";

import { useRequireAuth } from "@/_hooks/require";
import { Component } from "./component";
import type { Props } from "./types";

export const Logout: React.FC<Props> = (props) => {
  useRequireAuth();

  return <Component {...props} />;
};
