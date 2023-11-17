import type { useRegister } from "../../_hooks";

export type Props = {
  //
};

export type _Props = Props & {
  action: ReturnType<typeof useRegister>["action"];
  errors?: ReturnType<typeof useRegister>["errors"];
};
