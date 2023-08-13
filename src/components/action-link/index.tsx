import { Component } from "./component";
import type { Props } from "./types";

export const ActionLink: React.FC<Props> = (props) => {
  let className =
    "px-3 py-1 no-underline hover:text-gray-100 bg-gray-700 hover:bg-green-700 rounded shadow-sm";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
