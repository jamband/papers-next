import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const { notification } = useNotificationAction();
  const [errors, setErrors] = useState();

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/login`, {
      cache: "no-store",
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    });

    if (response.ok) {
      router.push("/");
      router.refresh();
      notification({ message: "Logged in successfully." });
      return;
    }

    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }
  };

  return {
    action,
    errors,
  } as const;
};
