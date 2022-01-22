import { IconInformationCircle } from "~/icons/information-circle";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <div className={props.className}>
    <IconInformationCircle className="mr-1 h-5 w-5" />
    {props.message}
  </div>
);
