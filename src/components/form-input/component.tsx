import { FormError } from "../form-error";
import { FormLabel } from "../form-label";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`flex flex-col gap-1 ${props.className || ""}`}>
    <FormLabel htmlFor={props.id} required={props.required}>
      {props.label}
    </FormLabel>
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={`${props.inputClass} ${
        props.feedback ? "outline-none ring-1 ring-red-400 focus:ring" : ""
      }`}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      aria-required={props.required}
      aria-describedby={`${props.id}-feedback`}
      defaultValue={props.defaultValue || ""}
      ref={props.focus ? props.inputRef : null}
    />
    {!!props.feedback && (
      <FormError id={`${props.id}-feedback`} message={props.feedback} />
    )}
  </fieldset>
);
