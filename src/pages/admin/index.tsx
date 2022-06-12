import Link from "next/link";
import { Button } from "../../components/button";
import { FailedToFetch } from "../../components/failed-to-fetch";
import { Loading } from "../../components/loading";
import { useAuth } from "../../hooks/auth";
import { useLogout } from "../../hooks/logout";
import { useRequireAdmin } from "../../hooks/require";
import { Page } from "../../layouts/page";

export default function View() {
  useRequireAdmin();

  const { authError, authIsLoading } = useAuth();
  const { logout } = useLogout({ asAdmin: true });

  if (authError) {
    return (
      <Page title="">
        <h1 className="mb-10 md:mb-20">Admin Home</h1>
        <FailedToFetch className="text-center" />
      </Page>
    );
  }

  if (authIsLoading) {
    return <Loading className="flex items-center justify-center" />;
  }

  return (
    <Page title="Admin">
      <h1>Admin Home</h1>
      <div className="mt-16 flex items-center justify-center">
        <Link href="/admin/users">
          <a className="px-5 py-2">Users</a>
        </Link>
      </div>
      <hr className="my-12" />
      <div className="flex items-center justify-center">
        <div className="animate-fadeIn">
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    </Page>
  );
}
