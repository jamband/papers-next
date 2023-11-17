import { FormInformation } from "@/_components/form-information";
import { FormInput } from "@/_components/form-input";
import { FormSubmit } from "@/_components/form-submit";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <form className={styles.container} onSubmit={props.action}>
    <input type="hidden" name="token" defaultValue={props.token} />
    <FormInformation className={styles.information} />
    <FormInput
      type="text"
      name="email"
      label="Email"
      className={styles.fieldset}
      inputClass={styles.textbox}
      feedback={props.errors?.email || props.errors?.token}
      required
      focus
    />
    <FormInput
      type="password"
      name="password"
      label="Password"
      className={styles.fieldset}
      inputClass={styles.textbox}
      feedback={props.errors?.password}
      required
    />
    <FormInput
      type="password"
      name="password_confirmation"
      label="Confirm Password"
      className={styles.fieldset}
      inputClass={styles.textbox}
      feedback={props.errors?.password_confirmation}
      required
    />
    <FormSubmit disabled={false}>Reset Password</FormSubmit>
  </form>
);
