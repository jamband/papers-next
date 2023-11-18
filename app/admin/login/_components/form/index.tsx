"use client";

import { useRequireGuest } from "@/_hooks/require";
import { useLogin } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  useRequireGuest();

  const { action, errors } = useLogin();

  return <Component {...props} action={action} errors={errors} />;
};
