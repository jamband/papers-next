import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className="text-sm text-red-400 opacity-80">{props.children}</div>
);
