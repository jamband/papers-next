import type { useProfile } from "@/profile/_hooks";

export type _Props = {
  profile: ReturnType<typeof useProfile>["profile"];
};
