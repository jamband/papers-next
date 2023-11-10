import { ExternalLink } from "@/components/external-link";
import { IconExternalLink } from "@/icons/external-link";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "./_app";
import styles from "./contact.module.css";

const Page: PageComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <p>
        Please to the message via{" "}
        <ExternalLink
          href="https://twitter.com/livejam_db"
          className={styles.link}
        >
          Twitter
          <IconExternalLink className={styles.icon} />
        </ExternalLink>{" "}
        or{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next/issues"
          className={styles.link}
        >
          GitHub Issues
          <IconExternalLink className={styles.icon} />
        </ExternalLink>
        .
      </p>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Contact">{page}</Layout>;

export default Page;
