import { API_URL } from "@/_constants/api";
import type { Paper } from "@/_types/paper";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  const deletePaper = async (id: number) => {
    await generateCsrfCookie();

    if (confirm("Are you sure?")) {
      const response = await fetch(`${API_URL}/papers/${id}`, {
        method: "DELETE",
        cache: "no-store",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-XSRF-TOKEN": getCsrfToken(),
        },
      });

      if (response.ok) {
        router.push("/papers");
        router.refresh();
        return;
      }
    }
  };

  return {
    deletePaper,
  } as const;
};
