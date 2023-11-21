import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export const useRegister = () => {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
  }>();

  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    await fetch(`${API_URL}/register`, {
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
          router.push("/");
          notification({
            message:
              "A verification link has been sent to the email address you provided during registration.",
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
    action,
    errors,
  } as const;
};
