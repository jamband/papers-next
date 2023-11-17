import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDeleteAccount = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const { push } = useRouter();

  const action = async () => {
    await generateCsrfCookie();

    if (confirm("Are you sure you want to delete it?")) {
      const response = await fetch(`${API_URL}/delete-account`, {
        method: "POST",
        cache: "no-store",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": getCsrfToken(),
        },
      });

      if (response.ok) {
        setIsDeleted(true);
        return;
      }

      if (response.status === 423) {
        push("/confirm-password");
        return;
      }
    }
  };

  return {
    isDeleted,
    action,
  } as const;
};