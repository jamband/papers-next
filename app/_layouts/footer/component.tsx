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
      <a
        href="https://github.com/jamband/papers-next"
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </nav>
  </footer>
);
