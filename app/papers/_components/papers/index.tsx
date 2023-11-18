"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useDeletePaper, usePapers } from "@/papers/_hooks";
import { Component } from "./component";

export const Papers: React.FC = () => {
  useRequireVerified();

  const { papers } = usePapers();
  const { action: deletePaper } = useDeletePaper();

  return <Component papers={papers} deletePaper={deletePaper} />;
};
