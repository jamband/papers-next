import type { useDeletePaper, usePapers } from "@/papers/_hooks";

export type _Props = {
  papers?: ReturnType<typeof usePapers>["papers"];
  deletePaper: ReturnType<typeof useDeletePaper>["action"];
};
