import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div id={props.id} className={styles.container}>
    {props.message}
  </div>
);
