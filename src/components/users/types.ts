import type { User } from "~/types/user";

export type _Props = {
  users: Array<User> | undefined;
  deleteUser: (id: number) => void;
};
