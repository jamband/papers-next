import { http } from "@/utils/http";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

export const usePapers = () => {
  const { error, data } = useSWR("/papers");

  return {
    error,
    isLoading: !error && !data,
    data,
  } as const;
};

export const usePaper = () => {
  const { query } = useRouter();
  const id = query.id?.toString() || "";
  const { error, data } = useSWR(id ? `/papers/${id}` : null);

  return {
    error,
    isLoading: !error && !data,
    data,
  } as const;
};

export const useDeletePaper = () => {
  const { mutate } = useSWRConfig();
  const { push } = useRouter();

  const deletePaper = async (id: number) => {
    if (confirm("Are you sure?")) {
      const res = await http(`/papers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        mutate("/papers").then(() => {
          push("/papers");
        });
      }
    }
  };

  return {
    deletePaper,
  } as const;
};
