"use client";

import { useLogout } from "@/_hooks/auth";
import { useVerifyEmail } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
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
