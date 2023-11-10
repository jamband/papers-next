import { IconLightBulb } from "@/icons/light-bulb";
import styles from "./styles.module.css";

export const Component: React.FC = () => (
  <footer className={styles.container}>
    <IconLightBulb className={styles.icon} />
    Currently logged in as an administrator
  </footer>
);
