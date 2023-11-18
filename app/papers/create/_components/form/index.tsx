"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useCreatePaper } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  useRequireVerified();

  const { action, errors } = useCreatePaper();

  return <Component {...props} action={action} errors={errors} />;
};
