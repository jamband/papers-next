"use client";

import { useAuth, useVerificationNotification } from "@/_hooks/auth";
import { Component } from "./component";
import type { Props } from "./types";

export const HomeMain: React.FC<Props> = (props) => {
  useVerificationNotification();

  const { auth } = useAuth();

  return <Component {...props} auth={auth} />;
};
