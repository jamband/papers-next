import { API_URL } from "@/_constants/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./auth";

export const useRequireGuest = () => {
  const { auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined) {
      return;
    }

    if (auth?.role === "admin") {
      push("/admin");
      return;
    }

    if (auth) {
      push("/");
      return;
    }
  }, [auth, push]);
};

export const useRequireAuth = () => {
  const { auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined) {
      return;
    }

    if (auth === null) {
      push("/login");
      return;
    }

    if (auth.role === "admin") {
      push("/admin");
    }
  }, [auth, push]);
};

export const useRequireVerified = () => {
  const { auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined) {
      return;
    }

    if (auth === null) {
      push("/login");
      return;
    }

    if (auth.role === "admin") {
      push("/admin");
      return;
    }

    if (!auth.is_verified) {
      push("/verify-email");
      return;
    }
  }, [auth, push]);
};

export const useRequireAdmin = () => {
  const { auth } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined) {
      return;
    }

    if (auth?.role !== "admin") {
      push("/");
      return;
    }
  }, [auth, push]);
};

export const useRequirePasswordConfirm = () => {
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/confirmed-password`, {
        cache: "no-store",
        credentials: "include",
      });

      if (!response.ok) {
        push("/confirm-password");
        return;
      }
    })();
  }, [push]);
};
