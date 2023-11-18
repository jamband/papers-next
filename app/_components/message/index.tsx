import { Component } from "./component";
import type { Props } from "./types";

export const Message: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
