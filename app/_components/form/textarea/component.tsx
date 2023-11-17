import { FormError } from "../error";
import { FormLabel } from "../label";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`${styles.container} ${props.className || ""}`}>
    <FormLabel htmlFor={props.id} required={props.required}>
      {props.label}
    </FormLabel>
    <textarea
      name={props.name}
      id={props.id}
      className={`${props.inputClass} ${
        props.feedback ? styles.feedback : "border"
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
