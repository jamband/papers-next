import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { http } from "~/utils/http";
import { useNotificationAction } from "./notification";

export const useUsers = () => {
  const { error, data } = useSWR("/admin/users");

  return {
    error,
    isLoading: !error && !data,
    data,
  } as const;
};

export const useDeleteUser = () => {
  const { mutate } = useSWRConfig();
  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const deleteUser = async (id: number) => {
    if (confirm("Are you sure you want to delete it?")) {
      const res = await http(`/admin/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        mutate("/admin/users", undefined).then(() => {
          push("/admin/users").then(() => {
            notification({ message: "The user has been deleted." });
          });
        });
      }
    }
  };

  return {
    deleteUser,
  } as const;
};
