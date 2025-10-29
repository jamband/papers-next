import { IconCircleInfo } from "@/_icons/circle-info";
import { IconXMark } from "@/_icons/x-mark";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container} role="alert">
    <div className={styles.message}>
      <IconCircleInfo className={styles.messageIcon} />
      <p>{props.message}</p>
      <button
        onClick={props.clear}
        className={styles.button}
        aria-label="Close"
      >
        <IconXMark className={styles.buttonIcon} />
      </button>
    </div>
  </div>
);
