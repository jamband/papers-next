import { IconInformationCircle } from "@/_icons/information-circle";
import { IconX } from "@/_icons/x";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container} role="alert">
    <div className={styles.message}>
      <IconInformationCircle className={styles.messageIcon} />
      <p>{props.message}</p>
      <button
        onClick={props.clear}
        className={styles.button}
        aria-label="Close"
      >
        <IconX className={styles.buttonIcon} />
      </button>
    </div>
  </div>
);
