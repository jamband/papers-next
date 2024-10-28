"use client";

import { useAuthState, useVerificationNotification } from "@/_hooks/auth";
import { useRequireNotAdmin } from "@/_hooks/require";
import { Component } from "./component";

export const Home: React.FC = () => {
  useRequireNotAdmin();
  useVerificationNotification();

  const auth = useAuthState();

  return <Component auth={auth} />;
};
