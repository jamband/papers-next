import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button {...props} className={props.className}>
    {props.children}
  </button>
);
