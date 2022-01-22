import { Component } from "./component";
import type { Props } from "./types";

export const FailedToFetch: React.VFC<Props> = (props) => {
  const message = props.message ?? "An error occurred while fetching the data.";

  let className = "flex items-center justify-center text-amber-500";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <Component {...props} message={message} className={className} />;
};
