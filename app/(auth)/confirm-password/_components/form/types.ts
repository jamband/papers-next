import type { useConfirmPassword } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  action: ReturnType<typeof useConfirmPassword>["action"];
  errors: ReturnType<typeof useConfirmPassword>["errors"];
};
