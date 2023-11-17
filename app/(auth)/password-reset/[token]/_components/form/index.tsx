"use client";

import { useParams } from "next/navigation";
import { useResetPassword } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  const params = useParams();
  const { action, errors } = useResetPassword();
  const token = params.token.toString();

  return <Component {...props} action={action} token={token} errors={errors} />;
};
