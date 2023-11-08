import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div id={props.id} className="text-sm text-red-400/80">
    {props.message}
  </div>
);
