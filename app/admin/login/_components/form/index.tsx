"use client";

import { useLogin } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  const { action, errors } = useLogin();

  return <Component {...props} action={action} errors={errors} />;
};
