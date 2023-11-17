"use client";

import { useRequireVerified } from "@/_hooks/require";
import { usePaper } from "@/papers/[id]/_hooks";
import { useUpdatePaper } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Form: React.FC<Props> = (props) => {
  useRequireVerified();

  const { paper } = usePaper();
  const { action, errors } = useUpdatePaper();

  return <Component {...props} paper={paper} action={action} errors={errors} />;
};
