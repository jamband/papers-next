import { IconInformationCircle } from "@/icons/information-circle";
import { Layout } from "@/layouts/layout";
import Link from "next/link";
import styles from "./500.module.css";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <div className={styles.conatiner}>
      <h1>An error occurred</h1>
      <p className={styles.description}>
        <IconInformationCircle className={styles.icon} />
        An error occurred.
      </p>
      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="An error occurred">{page}</Layout>;

export default Page;
