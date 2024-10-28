"use client";

import { useRequireGuest } from "@/_hooks/require";
import { useLogin } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireGuest();

  const { action, errors } = useLogin();

  return <Component action={action} errors={errors} />;
};
