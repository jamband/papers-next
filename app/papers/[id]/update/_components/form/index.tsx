"use client";

import { useRequireVerified } from "@/_hooks/require";
import { usePaper } from "@/papers/[id]/_hooks";
import { useUpdatePaper } from "../../_hooks";
import { Component } from "./component";

export const Form: React.FC = () => {
  useRequireVerified();

  const { paper } = usePaper();
  const { action, errors } = useUpdatePaper();

  return <Component paper={paper} action={action} errors={errors} />;
};
