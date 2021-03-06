import { Component } from "./component";
import type { Props } from "./types";

export const Button: React.FC<Props> = (props) => {
  let className =
    "px-3 py-1 text-gray-100 rounded shadow-md disabled:text-gray-400 disabled:bg-gray-800";

  if (!props.color) {
    className += " bg-green-700";
  }

  if (props.color === "red") {
    className += " bg-red-700";
  }

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
