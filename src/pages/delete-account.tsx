import { Button } from "@/components/button";
import { API_USER_KEY } from "@/constants/api";
import { useRequirePasswordConfirm, useRequireVerified } from "@/hooks/require";
import { IconExclamation } from "@/icons/exclamation";
import { Layout } from "@/layouts/layout";
import { http } from "@/utils/http";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import type { PageComponent } from "./_app";
import styles from "./delete-account.module.css";

const Page: PageComponent = () => {
  useRequireVerified();
  useRequirePasswordConfirm();

  const { push } = useRouter();
  const [isDeleted, setIsDeleted] = useState(false);
  const { mutate } = useSWRConfig();

  const deleteAccount = async () => {
    if (confirm("Are you sure you want to delete it?")) {
      const res = await http("/delete-account", {
        method: "POST",
      });

      if (res.status === 423) {
        await push("/confirm-password");
        return;
      }

      if (res.ok) {
        setIsDeleted(true);
        return;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (isDeleted) {
        mutate(API_USER_KEY, undefined);
        return;
      }
    };
  }, [isDeleted, mutate]);

  return (
    <>
      {isDeleted ? (
        <p className={styles.message}>Thank you for using it so far.</p>
      ) : (
        <div className={styles.container}>
          <h1>Delete account</h1>
          <p className={styles.description}>
            <IconExclamation className={styles.icon} />
            When the account is deleted, the related data will also be deleted.
          </p>
          <div className={styles.action}>
            <Button
              type="button"
              color="red"
              className={styles.button}
              onClick={deleteAccount}
            >
              <IconExclamation className={styles.icon} />
              Delete Account
            </Button>
            <span className="mx-2">or</span>
            <Link href="/">cancel</Link>
          </div>
        </div>
      )}
    </>
  );
};

Page.getLayout = (page) => <Layout title="Delete account">{page}</Layout>;

export default Page;
