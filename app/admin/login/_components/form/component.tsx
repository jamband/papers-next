import { FormCheck } from "@/_components/form-check";
import { FormInformation } from "@/_components/form-information";
import { FormInput } from "@/_components/form-input";
import { FormSubmit } from "@/_components/form-submit";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <form className={styles.container} onSubmit={props.action}>
    <FormInformation className={styles.information} />
    <FormInput
      type="email"
      name="email"
      label="Email"
      className={styles.fieldset}
      inputClass={styles.textbox}
      autoComplete="email"
      feedback={props.errors?.email}
      required
      focus
    />
    <FormInput
      type="password"
      name="password"
      label="Password"
      className={styles.fieldset}
      inputClass={styles.textbox}
      autoComplete="current-password"
      feedback={props.errors?.password}
      required
    />
    <FormCheck
      name="remember"
      label="Remeber me"
      className={styles.fieldset}
      feedback={props.errors?.remember}
    />
    <div className={styles.login}>
      <FormSubmit disabled={false}>Login</FormSubmit>
      as administrator
    </div>
  </form>
);
