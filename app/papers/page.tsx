import { ActionLink } from "@/_components/action-link";
import { IconPencil } from "@/_icons/pencil";
import { Papers } from "./_components/papers";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Papers</h1>
      <ActionLink href="/papers/create" className={styles.link}>
        Create New Paper
        <IconPencil className={styles.createIcon} />
      </ActionLink>
      <hr />
      <Papers />
    </div>
  );
}
