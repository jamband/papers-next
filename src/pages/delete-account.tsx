import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { Button } from "~/components/button";
import { API_USER_KEY } from "~/constants/api";
import { useRequirePasswordConfirm, useRequireVerified } from "~/hooks/require";
import { IconExclamation } from "~/icons/exclamation";
import { Page } from "~/layouts/page";
import { http } from "~/utils/http";

export default function View() {
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
        push("/confirm-password");
        return;
      }

      if (res.ok) setIsDeleted(true);
    }
  };

  useEffect(() => {
    return () => {
      if (isDeleted) mutate(API_USER_KEY, undefined);
    };
  }, [isDeleted, mutate]);

  return (
    <Page title={isDeleted ? "" : "Delete account"}>
      {isDeleted ? (
        <p className="grid h-70vh place-items-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-5xl text-transparent">
          Thank you for using it so far.
        </p>
      ) : (
        <>
          <h1 className="mb-5">Delete account</h1>
          <p className="mb-5 flex items-center text-red-600">
            <div className="mr-1">
              <IconExclamation />
            </div>
            When the account is deleted, the related data will also be deleted.
          </p>
          <Button
            color="red"
            onClick={deleteAccount}
            className="inline-flex items-center"
          >
            <span className="mr-1">
              <IconExclamation />
            </span>
            Delete Account
          </Button>
          <span className="mx-2">or</span>
          <Link href="/">
            <a>Cancel</a>
          </Link>
        </>
      )}
    </Page>
  );
}
