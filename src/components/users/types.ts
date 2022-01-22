import type { User } from "~/types/user";

export type _Props = {
  users: Array<User>;
  deleteUser: (id: number) => void;
};
