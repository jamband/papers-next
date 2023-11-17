import { IconLightBulb } from "@/_icons/light-bulb";
import Link from "next/link";
import { Form } from "./_components/form";
import styles from "./page.module.css";

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
        <div className={styles.footerDescription}>
          <IconLightBulb className={styles.footerIcon} />
          This is a login link for regular users.
        </div>
      </div>
    </div>
  );
}
