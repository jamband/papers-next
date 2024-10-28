"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useDeletePaper } from "@/papers/_hooks";
import { useParams } from "next/navigation";
import { usePaper } from "../../_hooks";
import { Component } from "./component";

export const Paper: React.FC = () => {
  useRequireVerified();

  const params = useParams();
  const paperId = Number(params.id);

  const { paper } = usePaper();
  const { action: deletePaper } = useDeletePaper();

  return (
    <Component paper={paper} paperId={paperId} deletePaper={deletePaper} />
  );
};
