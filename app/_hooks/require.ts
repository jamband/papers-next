import { API_URL } from "@/_constants/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "./auth";

export const useRequireGuest = () => {
  const auth = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
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
  const auth = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
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
  const auth = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
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

export const useRequireNotAdmin = () => {
  const auth = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
      return;
    }

    if (auth?.role === "admin") {
      push("/admin");
      return;
    }
  }, [auth, push]);
};

export const useRequireAdmin = () => {
  const auth = useAuthState();
  const { push } = useRouter();

  useEffect(() => {
    if (auth === undefined || auth instanceof Error) {
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
    fetch(`${API_URL}/confirmed-password`, {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          push("/confirm-password");
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [push]);
};
