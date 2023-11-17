import type { useForgotPassword } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  isSend: ReturnType<typeof useForgotPassword>["isSend"];
  action: ReturnType<typeof useForgotPassword>["action"];
  errors?: ReturnType<typeof useForgotPassword>["errors"];
};
