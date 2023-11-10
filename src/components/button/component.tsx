import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    {...props}
    className={`${styles.container} ${props.className || ""} ${
      props.color ? styles.red : styles.green
    }`}
  >
    {props.children}
  </button>
);
