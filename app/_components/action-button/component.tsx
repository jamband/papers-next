import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type={props.type}
    className={`${styles.container} ${props.className || ""}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
