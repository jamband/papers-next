import Link from "next/link";
import { Users } from "../../../components/users";
import { Page } from "../../../layouts/page";

export default function View() {
  return (
    <Page title="Manage users">
      <h1 className="mb-10">Manage users</h1>
      <Users />
      <div className="mt-10 text-center">
        <Link href="/admin">
          <a className="px-5 py-3">← Back to Admin Home</a>
        </Link>
      </div>
    </Page>
  );
}
