import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { formDataToJsonString } from "@/_utils/form";
import { useParams, useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";

export const useUpdatePaper = () => {
  const [errors, setErrors] = useState<{
    title?: string;
    body?: string;
  }>();

  const params = useParams();
  const { push } = useRouter();

  const action = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await generateCsrfCookie();

    await fetch(`${API_URL}/papers/${params.id}`, {
      method: "PUT",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
      body: formDataToJsonString(new FormData(event.target as HTMLFormElement)),
    }).then(async (response) => {
      if (response.ok) {
        push(`/papers/${params.id}`);
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
