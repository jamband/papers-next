import type { usePaper } from "@/papers/[id]/_hooks";
import type { useUpdatePaper } from "../../_hooks";

export type _Props = {
  paper: ReturnType<typeof usePaper>["paper"];
  action: ReturnType<typeof useUpdatePaper>["action"];
  errors: ReturnType<typeof useUpdatePaper>["errors"];
};
