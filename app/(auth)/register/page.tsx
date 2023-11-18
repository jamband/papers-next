import { Message } from "@/_components/message";
import { IconLightBulb } from "@/_icons/light-bulb";
import type { Metadata } from "next";
import Link from "next/link";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Register",
};

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <Form />
      <hr />
      <div>
        <Message className={styles.footerMessage}>
          <IconLightBulb className={styles.footerMessageIcon} />
          <p>
            If you have already registered as a user, please{" "}
            <Link href="/login">Login from this link</Link>.
          </p>
        </Message>
      </div>
    </div>
  );
}
