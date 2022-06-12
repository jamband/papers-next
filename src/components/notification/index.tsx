import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  useNotificationAction,
  useNotificationState,
} from "~/hooks/notification";
import { Component } from "./component";
import type { Props } from "./types";

export const Notification: React.FC<Props> = (props) => {
  const { message, color } = useNotificationState();
  const { clear } = useNotificationAction();
  const { pathname } = useRouter();

  let className =
    "pr-12 flex items-center relative border border-gray-700 bg-gray-800 rounded shadow-sm";

  className += color === "green" ? " text-green-600" : " text-amber-500";

  if (props.className) {
    className += ` ${props.className}`;
  }

  useEffect(() => {
    if (!message) return;
    clear();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!message) return null;

  return <Component message={message} clear={clear} className={className} />;
};
