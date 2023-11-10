import { ExternalLink } from "@/components/external-link";
import Link from "next/link";
import styles from "./styles.module.css";

export const Component: React.FC = () => (
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
