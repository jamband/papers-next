import { IconInformationCircle } from "@/icons/information-circle";
import { IconX } from "@/icons/x";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={props.className} role="alert">
    <div className="p-3">
      <IconInformationCircle className="mr-0.5 h-4 w-4 align-[-0.125em]" />
      {props.message}
    </div>
    <button
      onClick={props.clear}
      className="absolute right-0 top-0 mt-0 rounded p-3 text-gray-200 shadow-none"
      aria-label="Close"
    >
      <IconX className="h-5 w-5 align-[-0.2em]" />
    </button>
  </div>
);
