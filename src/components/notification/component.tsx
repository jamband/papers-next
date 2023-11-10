import { IconInformationCircle } from "@/icons/information-circle";
import { IconX } from "@/icons/x";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div
    className={`${styles.container} ${
      props.color === "green" ? styles.green : styles.amber
    }`}
    role="alert"
  >
    <div className={styles.message}>
      <IconInformationCircle className={styles.messageIcon} />
      {props.message}
    </div>
    <button onClick={props.clear} className={styles.button} aria-label="Close">
      <IconX className={styles.buttonIcon} />
    </button>
  </div>
);
