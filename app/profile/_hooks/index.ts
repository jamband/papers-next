import { API_URL } from "@/_constants/api";
import { useEffect, useState } from "react";
import type { Profile } from "../_types";

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>();

  useEffect(() => {
    fetch(`${API_URL}/profile`, {
      cache: "no-store",
      credentials: "include",
    }).then(async (response) => {
      if (response.ok) {
        setProfile(await response.json());
        return;
      }

      if (!response.ok) {
        setProfile(await response.json());
        return;
      }
    });
  }, []);

  return {
    profile,
  } as const;
};
