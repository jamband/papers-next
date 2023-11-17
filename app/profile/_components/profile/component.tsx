import { Loading } from "@/_components/loading";
import { FailedToFetch } from "_src/components/failed-to-fetch";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.profile === undefined ? (
      <Loading className={styles.loading} />
    ) : props.profile === null ? (
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
