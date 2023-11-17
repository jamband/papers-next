import type { Metadata } from "next";
import { DeleteAccount } from "./_components/delete-account";

export const metadata: Metadata = {
  title: "Delete account",
};

export default async function Page() {
  return <DeleteAccount />;
}
