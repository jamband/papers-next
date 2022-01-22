import { Component } from "./component";
import type { Props } from "./types";

export const Loading: React.VFC<Props> = (props) => {
  let className = "pointer-events-none";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} className={className} />;
};
