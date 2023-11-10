import { Button } from "@/components/button";
import { FailedToFetch } from "@/components/failed-to-fetch";
import { Loading } from "@/components/loading";
import { useAuth } from "@/hooks/auth";
import { useLogout } from "@/hooks/logout";
import { useRequireAdmin } from "@/hooks/require";
import { AdminLayout } from "@/layouts/admin-layout";
import Link from "next/link";
import type { PageComponent } from "../_app";
import styles from "./index.module.css";

const Page: PageComponent = () => {
  useRequireAdmin();

  const { authError, authIsLoading } = useAuth();
  const { logout } = useLogout({ asAdmin: true });

  if (authError) {
    return (
      <div className={styles.container}>
        <h1>Admin Home</h1>
        <FailedToFetch />
      </div>
    );
  }

  if (authIsLoading) {
    return <Loading className={styles.loading} />;
  }

  return (
    <div className={styles.container}>
      <h1>Admin Home</h1>
      <div className={styles.main}>
        <Link href="/admin/users" className={styles.link}>
          Users
        </Link>
      </div>
      <hr />
      <div className={styles.footer}>
        <Button type="button" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

Page.getLayout = (page) => <AdminLayout title="Admin">{page}</AdminLayout>;

export default Page;
