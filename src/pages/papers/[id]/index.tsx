import { ActionButton } from "@/components/action-button";
import { ActionLink } from "@/components/action-link";
import { FailedToFetch } from "@/components/failed-to-fetch";
import { Loading } from "@/components/loading";
import { useDeletePaper, usePaper } from "@/hooks/paper";
import { useRequireVerified } from "@/hooks/require";
import { IconTrash } from "@/icons/trash";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "@/pages/_app";
import Link from "next/link";
import styles from "./index.module.css";

const Page: PageComponent = () => {
  useRequireVerified();

  const {
    error: paperError,
    isLoading: paperIsLoading,
    data: paper,
  } = usePaper();

  const { deletePaper } = useDeletePaper();

  if (paperError) {
    return (
      <div className={styles.container}>
        <h1>Faild to fetch</h1>
        <FailedToFetch />
        <div className={styles.footer}>
          <Link href="/papers">Back to Papers</Link>
        </div>
      </div>
    );
  }

  if (paperIsLoading) {
    return <Loading className={styles.loading} />;
  }

  return (
    <div className={styles.container}>
      <h1>{paper.title}</h1>
      <div>{paper.body}</div>
      <div>
        <div>Created at: {paper.created_at}</div>
        <div>Updated at: {paper.updated_at}</div>
      </div>
      <div className={styles.action}>
        <ActionLink
          href={`/papers/${paper.id}/update`}
          className={styles.updateLink}
        >
          Update →
        </ActionLink>
        <ActionButton type="button" onClick={() => deletePaper(paper.id)}>
          Delete
          <IconTrash className={styles.deleteButtonIcon} />
        </ActionButton>
      </div>
      <hr />
      <div className={styles.footer}>
        <Link href="/papers" className={styles.footerLink}>
          ← Back to Papers
        </Link>
      </div>
    </div>
  );
};

Page.getLayout = (page) => {
  return <Layout title="View">{page}</Layout>;
};

export default Page;
