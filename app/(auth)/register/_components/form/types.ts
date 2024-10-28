import type { useRegister } from "../../_hooks";

export type _Props = {
  action: ReturnType<typeof useRegister>["action"];
  errors?: ReturnType<typeof useRegister>["errors"];
};
