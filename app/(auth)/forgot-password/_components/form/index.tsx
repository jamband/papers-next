"use client";

import { useRequireGuest } from "@/_hooks/require";
import { useForgotPassword } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireGuest();

  const { isSend, action, errors } = useForgotPassword();

  return <Component isSend={isSend} action={action} errors={errors} />;
};
