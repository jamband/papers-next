import { http } from "@/utils/http";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./auth";

export const useRequireGuest = () => {
  const { authIsLoading, auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (authIsLoading) return;

    if (auth?.role === "admin") {
      push("/admin");
      return;
    }

    if (auth) push("/");
  }, [authIsLoading, auth, push]);
};

export const useRequireAuth = () => {
  const { authIsLoading, auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (authIsLoading) return;

    if (!auth) {
      push("/login");
      return;
    }
    if (auth.role === "admin") push("/admin");
  }, [authIsLoading, auth, push]);
};

export const useRequireVerified = () => {
  const { authIsLoading, auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (authIsLoading) return;

    if (!auth) {
      push("/login");
      return;
    }

    if (auth.role === "admin") {
      push("/admin");
      return;
    }

    if (!auth.is_verified) push("/verify-email");
  }, [authIsLoading, auth, push]);
};

export const useRequireAdmin = () => {
  const { authIsLoading, auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (authIsLoading) return;
    if (auth?.role !== "admin") push("/");
  }, [authIsLoading, auth, push]);
};

export const useRequirePasswordConfirm = () => {
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const res = await http("/confirmed-password");
      if (!res.ok) push("/confirm-password");
    })();
  }, [push]);
};
