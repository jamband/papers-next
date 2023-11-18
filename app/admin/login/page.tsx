import { Message } from "@/_components/message";
import { IconLightBulb } from "@/_icons/light-bulb";
import type { Metadata } from "next";
import Link from "next/link";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Login as administrator",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>
        Login <span className={styles.titleSuffix}>as administrator</span>
      </h1>
      <Form />
      <hr />
      <div className={styles.footer}>
        <Link href="/login">Login as regular user</Link>
        <Message className={styles.footerMessage}>
          <IconLightBulb className={styles.footerMessageIcon} />
          <p>This is a login link for regular users.</p>
        </Message>
      </div>
    </div>
  );
}
