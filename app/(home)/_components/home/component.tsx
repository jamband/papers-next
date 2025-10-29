import { FailedToFetch } from "@/_components/failed-to-fetch";
import { Loading } from "@/_components/loading";
import { LogoutButton } from "@/_components/logout-button";
import { Message } from "@/_components/message";
import { APP_DESCRIPTION } from "@/_constants/app";
import { IconCircleInfo } from "@/_icons/circle-info";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.auth === undefined ? (
      <div className={styles.content}>
        <Loading className={styles.loading} />
      </div>
    ) : props.auth instanceof Error ? (
      <FailedToFetch />
    ) : props.auth === null ? (
      <div className={styles.content}>
        <Message className={styles.message}>
          <IconCircleInfo className={styles.messageIcon} />
          <p>{APP_DESCRIPTION}</p>
        </Message>
        <hr />
        <div className={styles.footer}>
          <Link href="/login" className={styles.footerLink}>
            Login
          </Link>
          <Link href="/register" className={styles.footerLink}>
            Register
          </Link>
        </div>
      </div>
    ) : (
      <div className={styles.content}>
        <div className={styles.main}>
          <Link href="/papers" className={styles.mainLink}>
            Papers
          </Link>
          <Link href="/profile" className={styles.mainLink}>
            Profile
          </Link>
        </div>
        <hr />
        <div className={styles.footer}>
          <LogoutButton />
        </div>
      </div>
    )}
  </>
);
