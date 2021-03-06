import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <input
    {...props.rest}
    {...props.register}
    className={`${
      props.errors ? "outline-none ring-1 ring-red-400 focus:ring" : ""
    } ${props.className || ""}`}
  />
);
