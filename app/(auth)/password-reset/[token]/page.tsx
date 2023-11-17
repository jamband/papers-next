import type { Metadata } from "next";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reset password",
};

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Reset password</h1>
      <Form />
    </div>
  );
}
