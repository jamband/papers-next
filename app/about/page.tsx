import { ExternalLink } from "@/_components/external-link";
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
        <ExternalLink
          href="https://github.com/jamband/papers-next"
          className={styles.link}
        >
          GitHub jamband/papers-next
          <IconExternalLink className={styles.icon} />
        </ExternalLink>{" "}
        for details.
      </p>
    </div>
  );
}
