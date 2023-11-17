import type { useAuth } from "@/_hooks/auth";
import type { useLogout } from "@/admin/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  auth?: ReturnType<typeof useAuth>["auth"];
  logout: ReturnType<typeof useLogout>["action"];
};
