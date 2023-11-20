"use client";

import {
  useNotificationAction,
  useNotificationState,
} from "@/_hooks/notification";
import { Component } from "./component";
import type { Props } from "./types";

export const Notification: React.FC<Props> = (props) => {
  const { message, color } = useNotificationState();
  const { clear } = useNotificationAction();

  if (message === "") {
    return null;
  }

  setTimeout(() => {
    clear();
  }, 5000);

  return <Component {...props} message={message} clear={clear} color={color} />;
};
