"use client";

import { useAuth } from "@/_hooks/auth";
import { useLogout } from "@/admin/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Home: React.FC<Props> = (props) => {
  const { auth } = useAuth();
  const { action: logout } = useLogout();

  return <Component {...props} auth={auth} logout={logout} />;
};
