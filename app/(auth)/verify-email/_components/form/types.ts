import type { useLogout } from "@/_hooks/auth";
import type { useVerifyEmail } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  resendEmailVerification: ReturnType<typeof useVerifyEmail>["action"];
  logout: ReturnType<typeof useLogout>["action"];
};
