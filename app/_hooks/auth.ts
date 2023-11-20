import { API_URL, API_USER_KEY } from "@/_constants/api";
import type { Auth } from "@/_types/auth";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useNotificationAction } from "./notification";

export const useAuth = () => {
  const [auth, setAuth] = useState<Auth | null>();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    fetch(API_URL + API_USER_KEY, {
      cache: "no-store",
      credentials: "include",
    }).then(async (response) => {
      if (response.status === 200) {
        setAuth(await response.json());
        return;
      }

      if (response.status === 204) {
        setAuth(null);
        return;
      }
    });
  }, [q]);

  return {
    auth,
  } as const;
};

export const useLogout = () => {
  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    await fetch(`${API_URL}/logout`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": getCsrfToken() },
    }).then((response) => {
      if (response.ok) {
        router.push(`/?q=${crypto.randomUUID()}`);
        notification({ message: "Logged out successfully.", autoClose: true });
        return;
      }
    });
  };

  return {
    action,
  } as const;
};

export const useVerificationNotification = () => {
  const { auth } = useAuth();
  const searchParams = useSearchParams();
  const { notification } = useNotificationAction();

  useEffect(() => {
    if (auth === undefined) {
      return;
    }

    if (auth?.is_verified && searchParams.get("verified") === "1") {
      notification({ message: "User registration has been completed." });
      return;
    }
  }, [auth, searchParams, notification]);
};
