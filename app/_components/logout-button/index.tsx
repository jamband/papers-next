"use client";

import { useLogout } from "@/_hooks/auth";
import { Component } from "./component";

export const LogoutButton: React.FC = () => {
  const { action } = useLogout();

  return <Component action={action} />;
};
