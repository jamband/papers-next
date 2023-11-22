import { APP_DESCRIPTION } from "@/_constants/app";
import { IconExternalLink } from "@/_icons/external-link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>{APP_DESCRIPTION}</p>
      <p>
        This website is an open source project. See{" "}
        <a
          href="https://github.com/jamband/papers-next"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub jamband/papers-next
          <IconExternalLink className={styles.icon} />
        </a>{" "}
        for details.
      </p>
    </div>
  );
}
