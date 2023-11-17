import { FormInformation } from "@/_components/form/information";
import { FormInput } from "@/_components/form/input";
import { FormSubmit } from "@/_components/form/submit";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <form className={styles.container} onSubmit={props.action}>
    <FormInformation className={styles.information} />
    <FormInput
      type="text"
      name="email"
      label="Email"
      className={styles.fieldset}
      inputClass={styles.textbox}
      feedback={props.errors?.email}
      required
      focus
    />
    <FormSubmit disabled={props.isSend}>Send Email</FormSubmit>
  </form>
);
