"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useDeletePaper } from "@/papers/_hooks";
import { usePaper } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Paper: React.FC<Props> = (props) => {
  useRequireVerified();

  const { paper } = usePaper();
  const { action: deletePaper } = useDeletePaper();

  return <Component {...props} paper={paper} deletePaper={deletePaper} />;
};
