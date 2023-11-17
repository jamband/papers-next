import type { Metadata } from "next";
import { Form } from "./_components/form";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Update Paper",
};
export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Update Paper</h1>
      <Form />
    </div>
  );
}
