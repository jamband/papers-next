"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useConfirmPassword } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireVerified();

  const { action, errors } = useConfirmPassword();

  return <Component action={action} errors={errors} />;
};
