import type { useLogin } from "../../_hooks";

export type _Props = {
  action: ReturnType<typeof useLogin>["action"];
  errors?: ReturnType<typeof useLogin>["errors"];
};
