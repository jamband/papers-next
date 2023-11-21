"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useDeletePaper } from "@/papers/_hooks";
import { useParams } from "next/navigation";
import { usePaper } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Paper: React.FC<Props> = (props) => {
  useRequireVerified();

  const params = useParams();
  const paperId = Number(params.id);

  const { paper } = usePaper();
  const { action: deletePaper } = useDeletePaper();

  return (
    <Component
      {...props}
      paper={paper}
      paperId={paperId}
      deletePaper={deletePaper}
    />
  );
};
