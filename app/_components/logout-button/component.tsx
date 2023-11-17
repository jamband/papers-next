import { Button } from "@/_components/button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button type="button" onClick={props.action}>
    Logout
  </Button>
);
