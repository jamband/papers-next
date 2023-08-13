import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    {...props}
    className={`rounded bg-gray-700 px-3 py-1 shadow-sm hover:bg-green-700 hover:text-gray-100 ${
      props.className || ""
    }`}
  >
    {props.children}
  </button>
);
