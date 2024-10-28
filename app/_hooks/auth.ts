import { API_URL } from "@/_constants/api";
import { DispatchContext, StateContext } from "@/_contexts/auth";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect } from "react";
import { useNotificationAction } from "./notification";

export const useAuthState = () => {
  return useContext(StateContext);
};

export const useAuthAction = () => {
  const dispatch = useContext(DispatchContext);

  const setAuth = useCallback(async () => {
    const payload = await fetch(`${API_URL}/user`, {
      credentials: "include",
    })
      .then(async (response) => {
        if (response.status === 200) {
          return await response.json();
        }

        if (response.status === 204) {
          return null;
        }
      })
      .catch((error) => {
        console.error(error);
        return error;
      });

    dispatch({ type: "set", payload });
  }, [dispatch]);

  const clearAuth = useCallback(() => {
    dispatch({ type: "clear" });
  }, [dispatch]);

  return {
    setAuth,
    clearAuth,
  } as const;
};

export const useLogout = () => {
  const { clearAuth } = useAuthAction();
  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    await fetch(`${API_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": getCsrfToken() },
    }).then((response) => {
      if (response.ok) {
        clearAuth();
        router.push("/");
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
  const auth = useAuthState();
  const searchParams = useSearchParams();
  const { notification } = useNotificationAction();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
      return;
    }

    if (auth?.is_verified && searchParams.get("verified") === "1") {
      notification({ message: "User registration has been completed." });
      return;
    }
  }, [auth, searchParams, notification]);
};
