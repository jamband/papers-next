import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <textarea
    {...props}
    {...props.register}
    className={`${
      props.errors ? "outline-none ring-1 ring-red-400 focus:ring" : "border"
    } ${props.className || ""}`}
  />
);
