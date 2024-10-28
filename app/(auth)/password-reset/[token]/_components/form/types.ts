import type { useResetPassword } from "../../_hooks";

export type Params = {
  token: string;
};

export type _Props = {
  action: ReturnType<typeof useResetPassword>["action"];
  token: string;
  errors?: ReturnType<typeof useResetPassword>["errors"];
};
