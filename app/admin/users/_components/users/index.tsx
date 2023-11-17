"use client";

import { useDeleteUser, useUsers } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Users: React.FC<Props> = (props) => {
  const { users } = useUsers();
  const { action: deleteUser } = useDeleteUser();

  return <Component {...props} users={users} deleteUser={deleteUser} />;
};
