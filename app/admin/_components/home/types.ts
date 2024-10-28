import type { useAuthState } from "@/_hooks/auth";
import type { useLogout } from "@/admin/_hooks";

export type _Props = {
  auth: ReturnType<typeof useAuthState>;
  logout: ReturnType<typeof useLogout>["action"];
};
