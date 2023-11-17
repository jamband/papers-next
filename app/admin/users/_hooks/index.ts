import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import type { User } from "@/admin/_types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<Array<User> | null>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/admin/users`, {
        cache: "no-store",
        credentials: "include",
      });

      if (response.ok) {
        setUsers(await response.json());
        return;
      }
    })();
  }, []);

  return {
    users,
  } as const;
};

export const useDeleteUser = () => {
  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const action = async (id: number) => {
    if (confirm("Are you sure you want to delete it?")) {
      await generateCsrfCookie();

      const response = await fetch(`${API_URL}/admin/users/${id}`, {
        method: "DELETE",
        cache: "no-store",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": getCsrfToken(),
        },
      });

      if (response.ok) {
        push("/admin/users");
        notification({ message: "The user has been deleted." });
        return;
      }
    }
  };

  return {
    action,
  } as const;
};
