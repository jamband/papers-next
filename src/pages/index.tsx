import Link from "next/link";
import { Button } from "../components/button";
import { FailedToFetch } from "../components/failed-to-fetch";
import { Loading } from "../components/loading";
import { APP_DESCRIPTION } from "../constants/app";
import { useAuth } from "../hooks/auth";
import { useLogout } from "../hooks/logout";
import { useVerificationNotification } from "../hooks/verification-notification";
import { IconInformationCircle } from "../icons/information-circle";
import { Page } from "../layouts/page";

export default function View() {
  const { authError, authIsLoading, auth } = useAuth();
  const { logout } = useLogout({ asAdmin: false });

  useVerificationNotification();

  if (authError) {
    return (
      <Page title="">
        <h1 className="mb-10 md:mb-20">Home</h1>
        <FailedToFetch className="text-center" />
      </Page>
    );
  }

  if (authIsLoading) {
    return <Loading className="flex items-center justify-center" />;
  }

  return (
    <Page title="">
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
            <Button onClick={logout}>Logout</Button>
          </div>
        </div>
      ) : (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-center">
            <div className="mr-1">
              <IconInformationCircle className="h-4 w-4" />
            </div>
            <div className="text-center">{APP_DESCRIPTION}</div>
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
    </Page>
  );
}
