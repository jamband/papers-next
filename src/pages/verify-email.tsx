import { Button } from "@/components/button";
import {
  NOTIFICATION_NEW_VERIFICATION_LINK_SENT,
  NOTIFICATION_TOO_MANY_REQUEST,
} from "@/constants/notification";
import { useLogout } from "@/hooks/logout";
import { useNotificationAction } from "@/hooks/notification";
import { useRequireAuth } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import { http } from "@/utils/http";
import type { PageComponent } from "./_app";
import styles from "./verify-email.module.css";

const Page: PageComponent = () => {
  useRequireAuth();

  const { logout } = useLogout({ asAdmin: false });
  const { notification } = useNotificationAction();

  const resendEmailVerification = async () => {
    const res = await http("/email/verification-notification", {
      method: "POST",
    });

    if (res.status === 429) {
      notification({
        message: NOTIFICATION_TOO_MANY_REQUEST,
        color: "yellow",
      });
      return;
    }

    if (res.ok) {
      notification({ message: NOTIFICATION_NEW_VERIFICATION_LINK_SENT });
      return;
    }
  };

  return (
    <div className={styles.container}>
      <h1>Email Verification</h1>
      <p>
        Thanks for registered! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </p>
      <Button
        type="button"
        className={styles.button}
        onClick={resendEmailVerification}
      >
        Resend Verification Email
      </Button>
      <hr />
      <div className={styles.footer}>
        <Button type="button" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Verify Email">{page}</Layout>;

export default Page;
