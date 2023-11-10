import { FailedToFetch } from "@/components/failed-to-fetch";
import { Loading } from "@/components/loading";
import { useRequireVerified } from "@/hooks/require";
import { Layout } from "@/layouts/layout";
import type { Profile } from "@/types/profile";
import Link from "next/link";
import useSWR from "swr";
import type { PageComponent } from "../_app";
import styles from "./styles.module.css";

const Page: PageComponent = () => {
  useRequireVerified();

  const { error, data } = useSWR<Profile>("/profile");

  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      {error ? (
        <FailedToFetch />
      ) : (
        <>
          {!error && !data ? (
            <Loading className={styles.loading} />
          ) : (
            <div className={styles.content}>
              <div className={styles.main}>
                <div>Name: {data?.name}</div>
                <div>Email: {data?.email}</div>
              </div>
              <hr />
              <Link href="/delete-account" className={styles.link}>
                Delete account
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

Page.getLayout = (page) => <Layout title="Profile">{page}</Layout>;

export default Page;
