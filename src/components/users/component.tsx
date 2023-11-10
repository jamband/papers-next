import { IconExclamation } from "@/icons/exclamation";
import { Button } from "../button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    {props.users?.map((user) => (
      <div key={user.id}>
        <div className={styles.section}>
          <div className={styles.title}>Name:</div>
          <div className={styles.value}>{user.name}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Email:</div>
          <div className={styles.value}>{user.email}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Email verified at:</div>
          <div className={styles.value}>{user.email_verified_at}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Created at: </div>
          <div className={styles.value}>{user.created_at}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Updated at: </div>
          <div className={styles.value}>{user.updated_at}</div>
        </div>
        <Button
          type="button"
          className={styles.deleteButton}
          onClick={() => props.deleteUser(user.id)}
          color="red"
        >
          <IconExclamation className={styles.deleteButtonIcon} />
          Delete
        </Button>
        <hr className={styles.divider} />
      </div>
    ))}
  </div>
);
