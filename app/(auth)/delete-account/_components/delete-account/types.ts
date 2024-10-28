import type { useDeleteAccount } from "../../_hooks";

export type _Props = {
  isDeleted: boolean;
  action: ReturnType<typeof useDeleteAccount>["action"];
};
