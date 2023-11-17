import { Button } from "@/_components/button";
import { IconExclamation } from "@/_icons/exclamation";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.isDeleted ? (
      <p className={styles.message}>Thank you for using it so far.</p>
    ) : (
      <div className={styles.container}>
        <h1>Delete account</h1>
        <p className={styles.description}>
          <IconExclamation className={styles.icon} />
          When the account is deleted, the related data will also be deleted.
        </p>
        <div className={styles.action}>
          <Button
            type="button"
            color="red"
            className={styles.button}
            onClick={props.action}
          >
            <IconExclamation className={styles.icon} />
            Delete Account
          </Button>
          or
          <Link href="/">cancel</Link>
        </div>
      </div>
    )}
  </>
);
