import { useDeleteUser } from "@/hooks/user";
import type { User } from "@/types/user";
import useSWR from "swr";
import { FailedToFetch } from "../failed-to-fetch";
import { Loading } from "../loading";
import { Component } from "./component";
import styles from "./styles.module.css";

export const Users: React.FC = () => {
  const { error, data } = useSWR<User[]>("/admin/users");
  const { deleteUser } = useDeleteUser();

  if (error) {
    return <FailedToFetch />;
  }

  if (!error && !data) {
    return <Loading className={styles.loading} />;
  }

  return <Component users={data} deleteUser={deleteUser} />;
};
