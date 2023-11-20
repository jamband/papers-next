import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Paper } from "../_types";

export const usePapers = () => {
  const [papers, setPapers] = useState<Array<Paper> | null>();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetch(`${API_URL}/papers`, {
      cache: "no-store",
      credentials: "include",
    }).then(async (response) => {
      if (response.ok) {
        setPapers(await response.json());
        return;
      }
    });
  }, [searchParams]);

  return {
    papers,
  } as const;
};

export const useDeletePaper = () => {
  const router = useRouter();

  const action = async (id: number) => {
    if (confirm("Are you sure?")) {
      await generateCsrfCookie();

      await fetch(`${API_URL}/papers/${id}`, {
        method: "DELETE",
        cache: "no-store",
        credentials: "include",
        headers: { "X-XSRF-TOKEN": getCsrfToken() },
      }).then((response) => {
        if (response.ok) {
          router.push(`/papers?q=${crypto.randomUUID()}`);
          return;
        }
      });
    }
  };

  return {
    action,
  } as const;
};
