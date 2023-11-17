import type { useCreatePaper } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  action: ReturnType<typeof useCreatePaper>["action"];
  errors?: ReturnType<typeof useCreatePaper>["errors"];
};
