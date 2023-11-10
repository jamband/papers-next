import { APP_NAME } from "@/constants/app";
import Link from "next/link";
import styles from "./styles.module.css";

export const Component: React.FC = () => (
  <header>
    <nav className={styles.navigation} aria-label="Header navigation">
      <Link href="/" className={styles.link}>
        {APP_NAME}
      </Link>
    </nav>
  </header>
);
