import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useRouter } from "next/navigation";
import type { SubmitEvent } from "react";
import { useState } from "react";

export const useCreatePaper = () => {
  const [errors, setErrors] = useState<{
    title?: string;
    body?: string;
  }>();

  const { push } = useRouter();

  const action = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    await fetch(`${API_URL}/papers`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    }).then(async (response) => {
      if (response.ok) {
        push("/papers");
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
