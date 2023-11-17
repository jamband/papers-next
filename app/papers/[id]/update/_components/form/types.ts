import type { usePaper } from "@/papers/[id]/_hooks";
import type { useUpdatePaper } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  paper: ReturnType<typeof usePaper>["paper"];
  action: ReturnType<typeof useUpdatePaper>["action"];
  errors: ReturnType<typeof useUpdatePaper>["errors"];
};
