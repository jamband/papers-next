import type { Metadata } from "next";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Verify Email",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Email Verification</h1>
      <p>
        Thanks for registered! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </p>
      <Form />
    </div>
  );
}
