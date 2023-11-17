import { Home } from "./(home)/_components/home";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Home />
    </div>
  );
}
