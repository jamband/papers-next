import { ActionButton } from "@/_components/action-button";
import { ActionLink } from "@/_components/action-link";
import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import { IconArrowLeft } from "@/_icons/arrow-left";
import { IconArrowRight } from "@/_icons/arrow-right";
import { IconTrash } from "@/_icons/trash";
import type { Route } from "next";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.container}>
    {props.paper === undefined ? (
      <Loading className={styles.loading} />
    ) : props.paper instanceof Error ? (
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
            href={`/papers/${props.paperId}/update` as Route}
            className={styles.updateLink}
          >
            Update
            <IconArrowRight className={styles.updateLinkIcon} />
          </ActionLink>
          <ActionButton
            type="button"
            onClick={() => props.deletePaper(props.paperId)}
          >
            Delete
            <IconTrash className={styles.deleteButtonIcon} />
          </ActionButton>
        </div>
        <hr />
        <div className={styles.footer}>
          <Link href="/papers" className={styles.footerLink}>
            <IconArrowLeft className={styles.footerLinkIcon} />
            Back to Papers
          </Link>
        </div>
      </>
    )}
  </div>
);
