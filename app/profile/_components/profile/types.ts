import type { useProfile } from "@/profile/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  profile: ReturnType<typeof useProfile>["profile"];
};
