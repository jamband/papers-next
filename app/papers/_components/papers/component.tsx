import { ActionButton } from "@/_components/action-button";
import { ActionLink } from "@/_components/action-link";
import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import { IconClock } from "@/_icons/clock";
import { IconTrash } from "@/_icons/trash";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.papers === undefined ? (
      <Loading />
    ) : props.papers === null ? (
      <FailedToFetch />
    ) : (
      <>
        {props.papers.map((paper) => (
          <div className={styles.container} key={paper.id}>
            <h2>
              <Link href={`/papers/${paper.id}`}>{paper.title}</Link>
            </h2>
            <div>{paper.body}</div>
            <div className={styles.createdAt}>
              <IconClock className={styles.clockIcon} />
              {paper.created_at}
            </div>
            <div className={styles.action}>
              <ActionLink
                href={`/papers/${paper.id}/update`}
                className={styles.updateLink}
              >
                Update →
              </ActionLink>
              <ActionButton
                type="button"
                onClick={() => props.deletePaper(paper.id)}
              >
                Delete
                <IconTrash className={styles.deleteButtonIcon} />
              </ActionButton>
            </div>
            <hr />
          </div>
        ))}
      </>
    )}
  </>
);
