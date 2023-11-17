import { API_URL } from "@/_constants/api";

export const usePasswordConfirm = () => {
  const passwordConfirm = async () => {
    const response = await fetch(`${API_URL}/confirmed-password`, {
      cache: "no-store",
      credentials: "include",
    });

    if (!response.ok) {
      return await response.json();
    }
  };

  return {
    passwordConfirm,
  } as const;
};
