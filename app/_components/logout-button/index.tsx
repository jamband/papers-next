"use client";

import { useLogout } from "@/_hooks/auth";
import { Component } from "./component";
import type { Props } from "./types";

export const LogoutButton: React.FC<Props> = (props) => {
  const { action } = useLogout();

  return <Component {...props} action={action} />;
};
