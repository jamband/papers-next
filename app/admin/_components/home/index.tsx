"use client";

import { useAuthState } from "@/_hooks/auth";
import { useRequireAdmin } from "@/_hooks/require";
import { useLogout } from "@/admin/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Home: React.FC<Props> = (props) => {
  useRequireAdmin();

  const auth = useAuthState();
  const { action: logout } = useLogout();

  return <Component {...props} auth={auth} logout={logout} />;
};
