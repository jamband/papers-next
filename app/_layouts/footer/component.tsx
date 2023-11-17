import { ExternalLink } from "@/_components/external-link";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = () => (
  <footer className={styles.container}>
    <nav className={styles.navigation} aria-label="Footer navigation">
      <Link href="/about" className={styles.link}>
        About
      </Link>
      <Link href="/contact" className={styles.link}>
        Contact
      </Link>
      <ExternalLink
        href="https://github.com/jamband/papers-next"
        className={styles.link}
      >
        GitHub
      </ExternalLink>
    </nav>
  </footer>
);
