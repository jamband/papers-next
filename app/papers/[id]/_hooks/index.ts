import { API_URL } from "@/_constants/api";
import type { Paper } from "@/papers/_types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePaper = () => {
  const [paper, setPaper] = useState<Paper | null>();
  const params = useParams();

  useEffect(() => {
    fetch(`${API_URL}/papers/${params.id}`, {
      cache: "no-store",
      credentials: "include",
    }).then(async (response) => {
      if (response.ok) {
        setPaper(await response.json());
        return;
      }
    });
  }, [params]);

  return {
    paper,
  } as const;
};
