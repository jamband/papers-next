import type { useDeletePaper } from "@/papers/_hooks";
import type { usePaper } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  paper: ReturnType<typeof usePaper>["paper"];
  deletePaper: ReturnType<typeof useDeletePaper>["deletePaper"];
};
