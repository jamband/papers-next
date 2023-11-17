import type { useLogin } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  action: ReturnType<typeof useLogin>["action"];
  errors?: ReturnType<typeof useLogin>["errors"];
};
