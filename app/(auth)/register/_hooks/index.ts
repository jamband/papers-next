import { API_URL, API_USER_KEY } from "@/_constants/api";
import { useAuthAction } from "@/_hooks/auth";
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

  const { setAuth } = useAuthAction();
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
          await fetch(API_URL + API_USER_KEY, {
            cache: "no-store",
            credentials: "include",
          })
            .then(async (response) => {
              if (response.status === 200) {
                setAuth(await response.json());
                return;
              }
              if (response.status === 204) {
                setAuth(null);
                return;
              }
            })
            .catch((error) => {
              setAuth(error);
              console.error(error);
            });

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
