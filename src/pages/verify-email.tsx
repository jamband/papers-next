import { Button } from "../components/button";
import {
  NOTIFICATION_NEW_VERIFICATION_LINK_SENT,
  NOTIFICATION_TOO_MANY_REQUEST,
} from "../constants/notification";
import { useLogout } from "../hooks/logout";
import { useNotificationAction } from "../hooks/notification";
import { useRequireAuth } from "../hooks/require";
import { Layout } from "../layouts/layout";
import { http } from "../utils/http";

export default function Page() {
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
    <>
      <h1 className="mb-5">Email Verification</h1>
      <p className="mb-5">
        Thanks for registered! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn&apos;t receive the email, we will gladly send you another.
      </p>
      <Button type="button" onClick={resendEmailVerification}>
        Resend Verification Email
      </Button>
      <hr className="my-10" />
      <div className="flex items-center justify-center">
        <Button type="button" onClick={logout}>
          Logout
        </Button>
      </div>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Verify Email">{page}</Layout>
);
