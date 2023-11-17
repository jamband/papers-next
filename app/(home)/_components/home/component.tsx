import { Loading } from "@/_components/loading";
import { LogoutButton } from "@/_components/logout-button";
import { APP_DESCRIPTION } from "@/_constants/app";
import { IconInformationCircle } from "@/_icons/information-circle";
import Link from "next/link";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.auth === undefined ? (
      <div className={styles.content}>
        <Loading className={styles.loading} />
      </div>
    ) : props.auth === null ? (
      <div className={styles.content}>
        <div className={styles.description}>
          <IconInformationCircle className={styles.icon} />
          {APP_DESCRIPTION}
        </div>
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
