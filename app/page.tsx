import { HomeMain } from "./_components/home/main";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <HomeMain />
    </div>
  );
}
