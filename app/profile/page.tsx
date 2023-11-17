import type { Metadata } from "next";
import { Profile } from "./_components/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <Profile />
    </div>
  );
}
