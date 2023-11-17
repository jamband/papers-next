import { usePasswordConfirm } from "@/(auth)/_hooks/password-confirm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./auth";

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

export const useRequirePasswordConfirm = () => {
  const { push } = useRouter();
  const { passwordConfirm } = usePasswordConfirm();

  useEffect(() => {
    async () => {
      if (await passwordConfirm()) {
        push("/confirm-password");
        return;
      }
    };
  }, [passwordConfirm, push]);
};
