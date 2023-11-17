import type { FormEvent } from "react";

export type Props = {
  //
};

export type _Props = Props & {
  action: (event: FormEvent<HTMLFormElement>) => void;
  token: string;
  errors?: {
    token?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
  };
};
