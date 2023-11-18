import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export const useCreatePaper = () => {
  const [errors, setErrors] = useState<{
    title?: string;
    body?: string;
  }>();

  const { push } = useRouter();

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/papers`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    });

    if (response.ok) {
      push("/papers");
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
