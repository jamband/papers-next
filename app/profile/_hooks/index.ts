import { API_URL } from "@/_constants/api";
import { useEffect, useState } from "react";
import type { Profile } from "../_types";

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | Error>();

  useEffect(() => {
    fetch(`${API_URL}/profile`, {
      credentials: "include",
    })
      .then(async (response) => {
        if (response.ok) {
          setProfile(await response.json());
          return;
        }
      })
      .catch((error) => {
        setProfile(error);
        console.error(error);
      });
  }, []);

  return {
    profile,
  } as const;
};
