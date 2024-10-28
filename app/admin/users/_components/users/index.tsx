"use client";

import { useRequireAdmin } from "@/_hooks/require";
import { useDeleteUser, useUsers } from "../../_hooks";
import { Component } from "./component";

export const Users: React.FC = () => {
  useRequireAdmin();

  const { users } = useUsers();
  const { action: deleteUser } = useDeleteUser();

  return <Component users={users} deleteUser={deleteUser} />;
};
