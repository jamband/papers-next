import { IconInformationCircle } from "../../icons/information-circle";
import { IconX } from "../../icons/x";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={props.className} role="alert">
    <div className="ml-3 mr-1">
      <IconInformationCircle className="h-4 w-4" />
    </div>
    <div className="py-3">{props.message}</div>
    <button
      onClick={props.clear}
      className="absolute top-0 right-0 mt-0 rounded p-4 text-gray-200 shadow-none hover:text-gray-400"
      aria-label="Close"
    >
      <IconX />
    </button>
  </div>
);
