import { API_URL } from "@/_constants/api";
import { NOTIFICATION_PASSWORD_RESET_LINK_SENT } from "@/_constants/notification";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import type { FormEvent } from "react";
import { useState } from "react";

export const useForgotPassword = () => {
  const { notification } = useNotificationAction();
  const [errors, setErrors] = useState();
  const [isSend, setIsSend] = useState(false);

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/forgot-password`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    });

    if (response.ok) {
      setIsSend(true);
      notification({ message: NOTIFICATION_PASSWORD_RESET_LINK_SENT });
      return;
    }

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }
  };

  return {
    isSend,
    action,
    errors,
  } as const;
};
