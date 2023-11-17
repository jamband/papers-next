import { API_URL } from "@/_constants/api";
import type { Paper } from "@/_types/paper";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePaper = () => {
  const [paper, setPaper] = useState<Paper | null>();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/papers/${params.id}`, {
        cache: "no-store",
        credentials: "include",
      });

      if (response.ok) {
        setPaper(await response.json());
        return;
      }
    })();
  }, [params]);

  return {
    paper,
  } as const;
};
