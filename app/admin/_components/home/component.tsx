import { Button } from "@/_components/button";
import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.auth === undefined ? (
      <Loading className={styles.loading} />
    ) : props.auth === null ? (
      <FailedToFetch />
    ) : (
      <>
        <div className={styles.main}>
          <Link href="/admin/users" className={styles.link}>
            Users
          </Link>
        </div>
        <hr />
        <div className={styles.footer}>
          <Button type="button" onClick={props.logout}>
            Logout
          </Button>
        </div>
      </>
    )}
  </>
);
