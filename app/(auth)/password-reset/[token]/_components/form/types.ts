import type { useResetPassword } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  action: ReturnType<typeof useResetPassword>["action"];
  token: string;
  errors?: ReturnType<typeof useResetPassword>["errors"];
};
