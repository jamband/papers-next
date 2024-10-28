import type { useConfirmPassword } from "../../_hooks";

export type _Props = {
  action: ReturnType<typeof useConfirmPassword>["action"];
  errors: ReturnType<typeof useConfirmPassword>["errors"];
};
