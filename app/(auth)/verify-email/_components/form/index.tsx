"use client";

import { useLogout } from "@/_hooks/auth";
import { useRequireAuth } from "@/_hooks/require";
import { useVerifyEmail } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  useRequireAuth();

  const { action: logout } = useLogout();
  const { action: resendEmailVerification } = useVerifyEmail();

  return (
    <Component
      {...props}
      resendEmailVerification={resendEmailVerification}
      logout={logout}
    />
  );
};
