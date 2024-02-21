import { IconExternalLink } from "@/_icons/external-link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <p>
        Please to the message via{" "}
        <a
          href="https://twitter.com/livejam_db"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          X
          <IconExternalLink className={styles.icon} />
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/jamband/papers-next/issues"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Issues
          <IconExternalLink className={styles.icon} />
        </a>
        .
      </p>
    </div>
  );
}
