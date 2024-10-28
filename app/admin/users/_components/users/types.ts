import type { useDeleteUser, useUsers } from "../../_hooks";

export type _Props = {
  users: ReturnType<typeof useUsers>["users"];
  deleteUser: ReturnType<typeof useDeleteUser>["action"];
};
