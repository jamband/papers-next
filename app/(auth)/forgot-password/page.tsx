import type { Metadata } from "next";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Forgot password",
};

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Forgot password</h1>
      <p>
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </p>
      <Form />
    </div>
  );
}
