import type { FormEvent } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  isSend: boolean;
  action: (event: FormEvent<HTMLFormElement>) => void;
  errors?: {
    email?: string;
  };
};
