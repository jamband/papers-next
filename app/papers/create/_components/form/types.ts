import type { useCreatePaper } from "../../_hooks";

export type _Props = {
  action: ReturnType<typeof useCreatePaper>["action"];
  errors?: ReturnType<typeof useCreatePaper>["errors"];
};
