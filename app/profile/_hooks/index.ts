import { useEffect, useState } from "react";
import type { Profile } from "../_types";
import { API_URL } from "@/_constants/api";

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>();

  const getProfile = async () => {
    const response = await fetch(`${API_URL}/profile`, {
      cache: "no-store",
      credentials: "include",
    });

    if (response.ok) {
      setProfile(await response.json());
      return;
    }

    if (!response.ok) {
      setProfile(await response.json());
      return;
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return {
    profile,
  } as const;
};
