import { ExternalLink } from "@/_components/external-link";
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
        <ExternalLink
          href="https://twitter.com/livejam_db"
          className={styles.link}
        >
          Twitter
          <IconExternalLink className={styles.icon} />
        </ExternalLink>{" "}
        or{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next/issues"
          className={styles.link}
        >
          GitHub Issues
          <IconExternalLink className={styles.icon} />
        </ExternalLink>
        .
      </p>
    </div>
  );
}
