"use client";

import { useParams } from "next/navigation";
import { useRequireGuest } from "@/_hooks/require";
import { useResetPassword } from "../../_hooks";
import { Component } from "./component";
import type { Params } from "./types";

export const Form: React.FC = () => {
  useRequireGuest();

  const params = useParams<Params>();
  const { action, errors } = useResetPassword();
  const token = params.token;

  return <Component action={action} token={token} errors={errors} />;
};
