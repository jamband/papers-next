import { API_URL, API_USER_KEY } from "@/_constants/api";
import type { Auth } from "@/_types/auth";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useNotificationAction } from "./notification";

export const useAuth = () => {
  const [auth, setAuth] = useState<Auth | null>();

  useEffect(() => {
    (async () => {
      const response = await fetch(API_URL + API_USER_KEY, {
        cache: "no-store",
        credentials: "include",
      });

      if (response.status === 200) {
        setAuth(await response.json());
      }

      if (response.status === 204) {
        setAuth(null);
      }
    })();
  }, [auth]);

  return {
    auth,
  } as const;
};

export const useLogout = () => {
  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": getCsrfToken(),
      },
    });

    if (response.ok) {
      router.push("/");
      notification({ message: "Logged out successfully." });
      return;
    }
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
