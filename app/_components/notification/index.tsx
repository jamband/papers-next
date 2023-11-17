import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Component } from "./component";
import type { Props } from "./types";

export const Notification: React.FC<Props> = (props) => {
  const { message, color } = useNotificationState();
  const { clear } = useNotificationAction();
  const { pathname } = useRouter();

  useEffect(() => {
    if (!message) return;
    clear();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!message) return null;

  return <Component {...props} message={message} clear={clear} color={color} />;
};
