import type { useLogout } from "@/_hooks/auth";
import type { useVerifyEmail } from "../../_hooks";

export type _Props = {
  resendEmailVerification: ReturnType<typeof useVerifyEmail>["action"];
  logout: ReturnType<typeof useLogout>["action"];
};
