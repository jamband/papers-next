import Link from "next/link";
import { Users } from "~/components/users";
import { AdminLayout } from "~/layouts/admin-layout";
import type { PageComponent } from "~/pages/_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1 className="mb-10">Manage users</h1>
      <Users />
      <div className="mt-10 text-center">
        <Link href="/admin">
          <a className="px-5 py-3">← Back to Admin Home</a>
        </Link>
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <AdminLayout title="Manage users">{page}</AdminLayout>
);

export default Page;
