import { API_URL } from "@/_constants/api";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Paper } from "../_types";

export const usePapers = () => {
  const [papers, setPapers] = useState<Array<Paper> | null>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/papers`, {
        cache: "no-store",
        credentials: "include",
      });

      if (response.ok) {
        setPapers(await response.json());
        return;
      }
    })();
  }, []);

  return {
    papers,
  } as const;
};

export const useDeletePaper = () => {
  const router = useRouter();

  const action = async (id: number) => {
    if (confirm("Are you sure?")) {
      await generateCsrfCookie();

      const response = await fetch(`${API_URL}/papers/${id}`, {
        method: "DELETE",
        cache: "no-store",
        credentials: "include",
        headers: {
          "X-XSRF-TOKEN": getCsrfToken(),
        },
      });

      if (response.ok) {
        router.push("/papers");
        return;
      }
    }
  };

  return {
    action,
  } as const;
};
