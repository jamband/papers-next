import { API_USER_KEY } from "@/constants/api";
import type { Auth } from "@/types/auth";
import useSWR from "swr";

export const useAuth = () => {
  const { error, data } = useSWR<Auth | null>(API_USER_KEY);

  return {
    authError: error,
    authIsLoading: !error && data === undefined,
    auth: data,
  } as const;
};
