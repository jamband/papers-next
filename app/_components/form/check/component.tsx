import { FormFeedback } from "../feedback";
import { FormLabel } from "../label";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <fieldset className={`${styles.container} ${props.className || ""}`}>
    <div className={styles.main}>
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
    </div>
    {!!props.feedback && (
      <FormFeedback id={`${props.id}-feedback`} message={props.feedback} />
    )}
  </fieldset>
);
