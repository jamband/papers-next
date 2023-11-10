import { ActionLink } from "@/components/action-link";
import { Papers } from "@/components/papers";
import { useRequireVerified } from "@/hooks/require";
import { IconPencil } from "@/icons/pencil";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "../_app";
import styles from "./index.module.css";

const Page: PageComponent = () => {
  useRequireVerified();

  return (
    <div className={styles.container}>
      <h1>Papers</h1>
      <ActionLink href="/papers/create" className={styles.link}>
        Create New Paper
        <IconPencil className={styles.createIcon} />
      </ActionLink>
      <hr />
      <Papers />
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Papers">{page}</Layout>;

export default Page;
