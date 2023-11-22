"use client";

import { useAuthState, useVerificationNotification } from "@/_hooks/auth";
import { useRequireNotAdmin } from "@/_hooks/require";
import { Component } from "./component";
import type { Props } from "./types";

export const Home: React.FC<Props> = (props) => {
  useRequireNotAdmin();
  useVerificationNotification();

  const auth = useAuthState();

  return <Component {...props} auth={auth} />;
};
