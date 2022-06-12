import useSWR from "swr";
import { API_USER_KEY } from "../constants/api";
import type { Auth } from "../types/auth";

export const useAuth = () => {
  const { error, data } = useSWR<Auth | null>(API_USER_KEY);

  return {
    authError: error,
    authIsLoading: !error && data === undefined,
    auth: data,
  } as const;
};
