import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import type { User } from "@/admin/_types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<Array<User> | Error>();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetch(`${API_URL}/admin/users`, {
      credentials: "include",
    })
      .then(async (response) => {
        if (response.ok) {
          setUsers(await response.json());
          return;
        }
      })
      .catch((error) => {
        setUsers(error);
        console.error(error);
      });
  }, [searchParams]);

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

      await fetch(`${API_URL}/admin/users/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: { "X-XSRF-TOKEN": getCsrfToken() },
      })
        .then((response) => {
          if (response.ok) {
            push(`/admin/users?q=${crypto.randomUUID()}`);
            notification({ message: "The user has been deleted." });
            return;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return {
    action,
  } as const;
};
