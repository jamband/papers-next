import { Button } from "@/_components/button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Button
      type="button"
      className={styles.button}
      onClick={props.resendEmailVerification}
    >
      Resend Verification Email
    </Button>
    <hr />
    <div className={styles.footer}>
      <Button type="button" onClick={props.logout}>
        Logout
      </Button>
    </div>
  </>
);
