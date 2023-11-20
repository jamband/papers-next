import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export const useLogin = () => {
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    remember?: string;
  }>();

  const { push } = useRouter();
  const { notification } = useNotificationAction();

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    }).then(async (response) => {
      if (response.ok) {
        push("/admin");
        notification({ message: "Logged in successfully." });
        return;
      }

      if (response.status === 422) {
        setErrors((await response.json()).errors);
        return;
      }
    });
  };

  return {
    action,
    errors,
  } as const;
};
