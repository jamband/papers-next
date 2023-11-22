"use client";

import { API_URL, API_USER_KEY } from "@/_constants/api";
import { useAuthAction, useAuthState } from "@/_hooks/auth";
import { useEffect } from "react";

export const Auth: React.FC = () => {
  const auth = useAuthState();
  const { setAuth } = useAuthAction();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error)
      fetch(API_URL + API_USER_KEY, {
        cache: "no-store",
        credentials: "include",
      })
        .then(async (response) => {
          if (response.status === 200) {
            setAuth(await response.json());
            return;
          }

          if (response.status === 204) {
            setAuth(null);
            return;
          }
        })
        .catch((error) => {
          setAuth(error);
          console.error(error);
        });
  }, [auth, setAuth]);

  return null;
};
