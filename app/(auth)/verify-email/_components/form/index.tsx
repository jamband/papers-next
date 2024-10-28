"use client";

import { useLogout } from "@/_hooks/auth";
import { useRequireAuth } from "@/_hooks/require";
import { useVerifyEmail } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireAuth();

  const { action: logout } = useLogout();
  const { action: resendEmailVerification } = useVerifyEmail();

  return (
    <Component
      resendEmailVerification={resendEmailVerification}
      logout={logout}
    />
  );
};
