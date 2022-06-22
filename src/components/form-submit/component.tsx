import { Button } from "../button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button
    type="submit"
    disabled={props.disabled}
    className="text-gray-100 disabled:bg-gray-700 disabled:text-gray-400"
  >
    {props.children}
  </Button>
);
