"use client";

import { useDeletePaper, usePapers } from "@/papers/_hooks";
import { Component } from "./component";

export const Papers: React.FC = () => {
  const { papers } = usePapers();
  const { deletePaper } = useDeletePaper();

  return <Component papers={papers} deletePaper={deletePaper} />;
};
