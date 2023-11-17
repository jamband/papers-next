import type { Metadata } from "next";
import { Home } from "./_components/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Admin Home</h1>
      <Home />
    </div>
  );
}
