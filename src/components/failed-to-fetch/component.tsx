import { IconInformationCircle } from "~/icons/information-circle";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    className={`flex items-center justify-center text-amber-500 ${
      props.className || ""
    }`}
  >
    <IconInformationCircle className="mr-1 h-5 w-5" />
    {props.message}
  </div>
);
