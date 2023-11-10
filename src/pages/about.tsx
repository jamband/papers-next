import { ExternalLink } from "@/components/external-link";
import { APP_DESCRIPTION } from "@/constants/app";
import { IconExternalLink } from "@/icons/external-link";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "./_app";
import styles from "./about.module.css";

const Page: PageComponent = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>{APP_DESCRIPTION}</p>
      <p>
        This website is an open source project. See{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next"
          className={styles.link}
        >
          GitHub jamband/papers-next
          <IconExternalLink className={styles.icon} />
        </ExternalLink>{" "}
        for details.
      </p>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="About">{page}</Layout>;

export default Page;
