import type { Auth } from "@/_types/auth";
import type { useLogout } from "@/admin/_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  auth?: Auth;
  logout: ReturnType<typeof useLogout>["action"];
};
