import type { Metadata } from "next";
import { Users } from "./_components/users";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Manage users",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Manage users</h1>
      <Users />
    </div>
  );
}
