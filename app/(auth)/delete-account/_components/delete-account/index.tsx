"use client";

import {
  useRequirePasswordConfirm,
  useRequireVerified,
} from "@/_hooks/require";
import { useDeleteAccount } from "../../_hooks";
import { Component } from "./component";

export const DeleteAccount: React.FC = () => {
  useRequireVerified();
  useRequirePasswordConfirm();

  const { isDeleted, action } = useDeleteAccount();

  return <Component isDeleted={isDeleted} action={action} />;
};
