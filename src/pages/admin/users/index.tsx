import { Users } from "@/components/users";
import { AdminLayout } from "@/layouts/admin-layout";
import type { PageComponent } from "@/pages/_app";
import Link from "next/link";
import styles from "./index.module.css";

const Page: PageComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Manage users</h1>
      <Users />
      <div className={styles.footer}>
        <Link href="/admin" className={styles.footerLink}>
          ← Back to Admin Home
        </Link>
      </div>
    </div>
  );
};

Page.getLayout = (page) => (
  <AdminLayout title="Manage users">{page}</AdminLayout>
);

export default Page;
