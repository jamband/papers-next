"use client";

import { useConfirmPassword } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  const { action, errors } = useConfirmPassword();

  return <Component {...props} action={action} errors={errors} />;
};
