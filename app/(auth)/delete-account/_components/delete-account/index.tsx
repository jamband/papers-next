"use client";

import {
  useRequirePasswordConfirm,
  useRequireVerified,
} from "@/_hooks/require";
import { useDeleteAccount } from "../../_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const DeleteAccount: React.FC<Props> = (props) => {
  useRequireVerified();
  useRequirePasswordConfirm();

  const { isDeleted, action } = useDeleteAccount();

  return <Component {...props} isDeleted={isDeleted} action={action} />;
};
