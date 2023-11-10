import styles from "./styles.module.css";
import type { Props } from "./types";

export const Icon: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.container} ${props.className}`}
    viewBox={props.viewBox}
    fill="currentColor"
    role="img"
    aria-hidden={true}
  >
    {props.children}
  </svg>
);
