import { FormError } from "../form-error";
import { FormLabel } from "../form-label";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`flex flex-col gap-1 ${props.className || ""}`}>
    <FormLabel htmlFor={props.id} required={props.required}>
      {props.label}
    </FormLabel>
    <textarea
      name={props.name}
      id={props.id}
      className={`${props.inputClass} ${
        props.feedback
          ? "outline-none ring-1 ring-red-400 focus:ring"
          : "border"
      }`}
      placeholder={props.placeholder}
      aria-required={props.required}
      aria-describedby={`${props.id}-feedback`}
      defaultValue={props.defaultValue || ""}
    />
    {!!props.feedback && (
      <FormError id={`${props.id}-feedback`} message={props.feedback} />
    )}
  </fieldset>
);
