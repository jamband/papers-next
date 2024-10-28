"use client";

import { useRequireGuest } from "@/_hooks/require";
import { useParams } from "next/navigation";
import { useResetPassword } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireGuest();

  const params = useParams();
  const { action, errors } = useResetPassword();
  const token = params.token.toString();

  return <Component action={action} token={token} errors={errors} />;
};
