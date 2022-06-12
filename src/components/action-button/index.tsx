import { Component } from "./component";
import type { Props } from "./types";

export const ActionButton: React.FC<Props> = (props) => {
  const type = props.type ?? "button";

  let className =
    "px-3 py-2 hover:text-gray-100 bg-gray-700 hover:bg-green-700 rounded shadow-sm";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} type={type} />;
};
