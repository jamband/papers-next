import type { useDeletePaper } from "@/papers/_hooks";
import type { usePaper } from "../../_hooks";

export type _Props = {
  paper: ReturnType<typeof usePaper>["paper"];
  paperId: number;
  deletePaper: ReturnType<typeof useDeletePaper>["action"];
};
