import Link from "next/link";
import { Button } from "~/components/button";
import { FailedToFetch } from "~/components/failed-to-fetch";
import { Loading } from "~/components/loading";
import { APP_DESCRIPTION } from "~/constants/app";
import { useAuth } from "~/hooks/auth";
import { useLogout } from "~/hooks/logout";
import { useVerificationNotification } from "~/hooks/verification-notification";
import { IconInformationCircle } from "~/icons/information-circle";
import { Layout } from "~/layouts/layout";

export default function Page() {
  const { authError, authIsLoading, auth } = useAuth();
  const { logout } = useLogout({ asAdmin: false });

  useVerificationNotification();

  if (authError) {
    return (
      <>
        <h1 className="mb-10 md:mb-20">Home</h1>
        <FailedToFetch className="text-center" />
      </>
    );
  }

  if (authIsLoading) {
    return <Loading className="flex items-center justify-center" />;
  }

  return (
    <>
      <h1 className="mb-10 md:mb-20">Home</h1>
      {auth ? (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-center">
            <Link href="/papers">
              <a className="px-5 py-2">Papers</a>
            </Link>
            <Link href="/profile">
              <a className="px-5 py-2">Profile</a>
            </Link>
          </div>
          <hr className="my-12" />
          <div className="text-center">
            <Button type="button" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <div className="animate-fadeIn">
          <div className="text-center">
            <IconInformationCircle className="mr-1 h-4 w-4 align-[-0.125em]" />
            {APP_DESCRIPTION}
          </div>
          <hr className="my-12" />
          <div className="flex items-center justify-center">
            <Link href="/login">
              <a className="px-5 py-2">Login</a>
            </Link>
            <Link href="/register">
              <a className="px-5 py-2">Register</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => <Layout title="">{page}</Layout>;
