"use client";

import { useAuthAction, useAuthState } from "@/_hooks/auth";
import { useEffect } from "react";

export const Auth: React.FC = () => {
  const auth = useAuthState();
  const { setAuth } = useAuthAction();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
      (async () => {
        await setAuth();
      })();
    }
  }, [auth, setAuth]);

  return null;
};
