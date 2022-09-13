import Link from "next/link";
import { IconInformationCircle } from "~/icons/information-circle";
import { Layout } from "~/layouts/layout";

export default function Page() {
  return (
    <>
      <h1 className="mb-5">Not Found</h1>
      <p className="flex items-center">
        <IconInformationCircle className="h-4 w-4" />
        <div className="ml-1">Page not found.</div>
      </p>
      <div className="mt-20 text-center">
        <Link href="/">
          <a className="px-5 py-3">Back to Home</a>
        </Link>
      </div>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="Not Found">{page}</Layout>
);
