import { FormFeedback } from "../feedback";
import { FormLabel } from "../label";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`${styles.container} ${props.className || ""}`}>
    <FormLabel htmlFor={props.id} required={props.required}>
      {props.label}
    </FormLabel>
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className={`${props.inputClass} ${props.feedback ? styles.feedback : ""}`}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      aria-required={props.required}
      aria-describedby={`${props.id}-feedback`}
      defaultValue={props.defaultValue || ""}
      ref={props.focus ? props.inputRef : null}
    />
    {!!props.feedback && (
      <FormFeedback id={`${props.id}-feedback`} message={props.feedback} />
    )}
  </fieldset>
);
