"use client";

import { useDeletePaper } from "@/papers/_hooks";
import { usePaper } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Paper: React.FC<Props> = (props) => {
  const { paper } = usePaper();
  const { deletePaper } = useDeletePaper();

  return <Component {...props} paper={paper} deletePaper={deletePaper} />;
};
