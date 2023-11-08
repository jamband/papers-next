import { FormError } from "../form-error";
import { FormLabel } from "../form-label";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`flex gap-1 ${props.className || ""}`}>
    <input
      type="checkbox"
      name={props.name}
      id={props.id}
      className={`${props.inputClass} ${
        props.feedback
          ? "shadow-[0_0_0_1px_red] outline-offset-2a outline-none focus:shadow-[0_0_0_2px_red]"
          : ""
      }`}
      aria-describedby={`${props.id}-feedback`}
      defaultChecked={props.defaultChecked || false}
    />
    <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
    {!!props.feedback && (
      <FormError id={`${props.id}-feedback`} message={props.feedback} />
    )}
  </fieldset>
);
