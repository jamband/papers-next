import Link from "next/link";
import useSWR from "swr";
import { FailedToFetch } from "../../components/failed-to-fetch";
import { Loading } from "../../components/loading";
import { useRequireVerified } from "../../hooks/require";
import { Layout } from "../../layouts/layout";
import type { Profile } from "../../types/profile";

export default function Page() {
  useRequireVerified();

  const { error, data } = useSWR<Profile>("/profile");

  return (
    <>
      <h1 className="mb-5">Profile</h1>
      {error ? (
        <FailedToFetch />
      ) : (
        <>
          {!error && !data ? (
            <Loading className="flex items-center justify-center" />
          ) : (
            <>
              <div>Name: {data?.name}</div>
              <div>Email: {data?.email}</div>
              <hr className="my-10" />
              <Link href="/delete-account">
                <a>Delete account</a>
              </Link>
            </>
          )}
        </>
      )}
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Profile">{page}</Layout>
);
