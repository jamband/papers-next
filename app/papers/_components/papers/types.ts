import type { useDeletePaper, usePapers } from "@/papers/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  papers?: ReturnType<typeof usePapers>["papers"];
  deletePaper: ReturnType<typeof useDeletePaper>["action"];
};
