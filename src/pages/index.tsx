import { Button } from "@/components/button";
import { FailedToFetch } from "@/components/failed-to-fetch";
import { Loading } from "@/components/loading";
import { APP_DESCRIPTION } from "@/constants/app";
import { useAuth } from "@/hooks/auth";
import { useLogout } from "@/hooks/logout";
import { useVerificationNotification } from "@/hooks/verification-notification";
import { IconInformationCircle } from "@/icons/information-circle";
import { Layout } from "@/layouts/layout";
import Link from "next/link";
import type { PageComponent } from "./_app";
import styles from "./index.module.css";

const Page: PageComponent = () => {
  const { authError, authIsLoading, auth } = useAuth();
  const { logout } = useLogout({ asAdmin: false });

  useVerificationNotification();

  if (authError) {
    return (
      <>
        <h1>Home</h1>
        <FailedToFetch />
      </>
    );
  }

  if (authIsLoading) {
    return <Loading className={styles.loading} />;
  }

  return (
    <div className={styles.container}>
      <h1>Home</h1>
      {auth ? (
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
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

Page.getLayout = (page) => <Layout title="">{page}</Layout>;

export default Page;
