import useSWR from "swr";
import { useDeleteUser } from "~/hooks/user";
import type { User } from "~/types/user";
import { FailedToFetch } from "../failed-to-fetch";
import { Loading } from "../loading";
import { Component } from "./component";

export const Users: React.FC = () => {
  const { error, data } = useSWR<User[]>("/admin/users");
  const { deleteUser } = useDeleteUser();

  if (error) {
    return <FailedToFetch />;
  }

  if (!error && !data) {
    return <Loading className="flex items-center justify-center" />;
  }

  return <Component users={data} deleteUser={deleteUser} />;
};
