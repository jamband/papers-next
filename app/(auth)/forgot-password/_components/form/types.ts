import type { useForgotPassword } from "../../_hooks";

export type _Props = {
  isSend: ReturnType<typeof useForgotPassword>["isSend"];
  action: ReturnType<typeof useForgotPassword>["action"];
  errors?: ReturnType<typeof useForgotPassword>["errors"];
};
