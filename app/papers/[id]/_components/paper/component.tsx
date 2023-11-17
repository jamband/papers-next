import { ActionButton } from "@/_components/action-button";
import { ActionLink } from "@/_components/action-link";
import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import { IconTrash } from "@/_icons/trash";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    {props.paper === undefined ? (
      <Loading className={styles.loading} />
    ) : props.paper === null ? (
      <FailedToFetch />
    ) : (
      <>
        <h1>{props.paper.title}</h1>
        <div>{props.paper.body}</div>
        <div>
          <div>Created at: {props.paper.created_at}</div>
          <div>Updated at: {props.paper.updated_at}</div>
        </div>
        <div className={styles.action}>
          <ActionLink
            href={`/papers/${props.paper.id}/update`}
            className={styles.updateLink}
          >
            Update →
          </ActionLink>
          <ActionButton
            type="button"
            onClick={() => props.deletePaper(props.paper?.id || 0)}
          >
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
      </>
    )}
  </div>
);
