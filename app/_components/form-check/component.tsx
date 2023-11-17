import { FormError } from "../form-error";
import { FormLabel } from "../form-label";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`${styles.container} ${props.className || ""}`}>
    <input
      type="checkbox"
      name={props.name}
      id={props.id}
      className={`${props.inputClass || ""} ${
        props.feedback ? styles.feedback : ""
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
