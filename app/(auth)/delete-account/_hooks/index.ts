import { API_URL } from "@/_constants/api";
import { useAuthAction } from "@/_hooks/auth";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDeleteAccount = () => {
  const { clearAuth } = useAuthAction();
  const [isDeleted, setIsDeleted] = useState(false);
  const { push } = useRouter();

  const action = async () => {
    if (confirm("Are you sure you want to delete it?")) {
      await generateCsrfCookie();

      await fetch(`${API_URL}/delete-account`, {
        method: "POST",
        cache: "no-store",
        credentials: "include",
        headers: { "X-XSRF-TOKEN": getCsrfToken() },
      })
        .then((response) => {
          if (response.ok) {
            setIsDeleted(true);

            setTimeout(() => {
              push("/");
              clearAuth();
            }, 5000);

            return;
          }

          if (response.status === 423) {
            push("/confirm-password");
            return;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return {
    isDeleted,
    action,
  } as const;
};
