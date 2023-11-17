import { APP_NAME } from "@/_constants/app";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = () => (
  <header>
    <nav className={styles.navigation} aria-label="Header navigation">
      <Link href="/" className={styles.link}>
        {APP_NAME}
      </Link>
    </nav>
  </header>
);
