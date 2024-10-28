"use client";

import { useRequireVerified } from "@/_hooks/require";
import { useProfile } from "@/profile/_hooks";
import { Component } from "./component";

export const Profile: React.FC = () => {
  useRequireVerified();

  const { profile } = useProfile();

  return <Component profile={profile} />;
};
