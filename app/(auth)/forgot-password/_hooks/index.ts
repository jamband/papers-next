import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import type { FormEvent } from "react";
import { useState } from "react";

export const useForgotPassword = () => {
  const [errors, setErrors] = useState<{
    email?: string;
  }>();

  const { notification } = useNotificationAction();
  const [isSend, setIsSend] = useState(false);

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    await fetch(`${API_URL}/forgot-password`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    })
      .then(async (response) => {
        if (response.ok) {
          setIsSend(true);
          notification({
            message: "We have emailed your password reset link.",
          });
          return;
        }

        if (response.status === 422) {
          setErrors((await response.json()).errors);
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    isSend,
    action,
    errors,
  } as const;
};
