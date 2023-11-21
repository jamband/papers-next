import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.profile === undefined ? (
      <Loading className={styles.loading} />
    ) : props.profile instanceof Error ? (
      <FailedToFetch />
    ) : (
      <div className={styles.content}>
        <div className={styles.main}>
          <div>Name: {props.profile.name}</div>
          <div>Email: {props.profile.email}</div>
        </div>
        <hr />
        <Link href="/delete-account" className={styles.link}>
          Delete account
        </Link>
      </div>
    )}
  </>
);
