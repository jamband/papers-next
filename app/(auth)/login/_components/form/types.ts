import type { FormEvent } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  action: (event: FormEvent<HTMLFormElement>) => void;
  errors?: {
    email?: string;
    password?: string;
    remember?: string;
  };
};
