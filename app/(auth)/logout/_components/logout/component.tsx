import { LogoutButton } from "@/_components/logout-button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = () => (
  <div className={styles.container}>
    <h1>Logout</h1>
    <p>Please press the button below to log out.</p>
    <LogoutButton />
  </div>
);
