import { API_URL } from "@/_constants/api";
import type { Paper } from "@/papers/_types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePaper = () => {
  const [paper, setPaper] = useState<Paper | Error>();
  const params = useParams();

  useEffect(() => {
    fetch(`${API_URL}/papers/${params.id}`, {
      credentials: "include",
    })
      .then(async (response) => {
        if (response.ok) {
          setPaper(await response.json());
          return;
        }
      })
      .catch((error) => {
        setPaper(error);
        console.error(error);
      });
  }, [params]);

  return {
    paper,
  } as const;
};
