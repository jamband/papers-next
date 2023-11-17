import type { useDeleteUser, useUsers } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  users: ReturnType<typeof useUsers>["users"];
  deleteUser: ReturnType<typeof useDeleteUser>["action"];
};
