import type { useDeleteAccount } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  isDeleted: boolean;
  action: ReturnType<typeof useDeleteAccount>["action"];
};
