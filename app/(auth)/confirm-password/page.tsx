import type { Metadata } from "next";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Confirm your password",
};

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Confirm your password</h1>
      <p>
        This is a secure area of the application. Please confirm your password
        before continuing.
      </p>
      <Form />
    </div>
  );
}
