import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <a
    className={props.className}
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.children}
  </a>
);
