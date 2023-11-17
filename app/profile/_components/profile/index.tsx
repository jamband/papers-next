"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useProfile } from "@/profile/_hooks";
import { Component } from "./component";
import type { Props } from "./types";

export const Profile: React.FC<Props> = (props) => {
  useRequireVerified();

  const { profile } = useProfile();

  return <Component {...props} profile={profile} />;
};
