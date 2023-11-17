import { IconInformationCircle } from "@/_icons/information-circle";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={`${styles.container} ${props.className || ""}`}>
    <IconInformationCircle className={styles.icon} />
    {props.message}
  </div>
);
