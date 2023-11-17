import { FormCheck } from "@/_components/form-check";
import { FormInput } from "@/_components/form-input";
import { FormSubmit } from "@/_components/form-submit";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <form className={styles.container} onSubmit={props.action}>
    <FormInput
      type="text"
      name="email"
      label="Email"
      className={styles.fieldset}
      inputClass={styles.textbox}
      autoComplete="email"
      feedback={props.errors?.email}
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
    />
    <FormCheck
      name="remember"
      label="Remeber me"
      className={styles.fieldset}
      feedback={props.errors?.remember}
    />
    <div className={styles.login}>
      <FormSubmit disabled={false}>Login</FormSubmit>
      or
      <Link href="/forgot-password">Forgot password?</Link>
    </div>
  </form>
);
