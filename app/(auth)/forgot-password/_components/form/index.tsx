"use client";

import { useRequireGuest } from "@/_hooks/require";
import { useForgotPassword } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  useRequireGuest();

  const { isSend, action, errors } = useForgotPassword();

  return (
    <Component {...props} isSend={isSend} action={action} errors={errors} />
  );
};
