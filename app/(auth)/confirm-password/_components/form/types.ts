import type { FormEvent } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  action: (event: FormEvent<HTMLFormElement>) => void;
  errors?: {
    password?: string;
  };
};