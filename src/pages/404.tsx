import { IconInformationCircle } from "@/icons/information-circle";
import { Layout } from "@/layouts/layout";
import Link from "next/link";
import styles from "./404.module.css";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <div className={styles.conatiner}>
      <h1>Not Found</h1>
      <p className={styles.description}>
        <IconInformationCircle className={styles.icon} />
        Page not found.
      </p>
      <Link href="/" className={styles.link}>
        Back to Home
      </Link>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Not Found">{page}</Layout>;

export default Page;
