"use client";

import { useAuthState } from "@/_hooks/auth";
import { useRequireAdmin } from "@/_hooks/require";
import { useLogout } from "@/admin/_hooks";
import { Component } from "./component";

export const Home: React.FC = () => {
  useRequireAdmin();

  const auth = useAuthState();
  const { action: logout } = useLogout();

  return <Component auth={auth} logout={logout} />;
};
