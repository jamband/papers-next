import { Message } from "@/_components/message";
import { IconLightBulb } from "@/_icons/light-bulb";
import type { Metadata } from "next";
import Link from "next/link";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <Form />
      <hr />
      <div className={styles.footer}>
        <Link href="/admin/login">Login as administrator</Link>
        <Message className={styles.footerMessage}>
          <IconLightBulb className={styles.footerMessageIcon} />
          <p>
            This link usually does not exist. Displayed for development
            environment.
          </p>
        </Message>
      </div>
    </div>
  );
}
