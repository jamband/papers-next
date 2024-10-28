"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useCreatePaper } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireVerified();

  const { action, errors } = useCreatePaper();

  return <Component action={action} errors={errors} />;
};
