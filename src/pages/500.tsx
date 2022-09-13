import Link from "next/link";
import { IconInformationCircle } from "~/icons/information-circle";
import { Layout } from "~/layouts/layout";
import type { PageComponent } from "./_app";

const Page: PageComponent = () => {
  return (
    <>
      <h1 className="mb-5">An error occurred</h1>
      <p className="flex items-center">
        <IconInformationCircle className="h-4 w-4" />
        <div className="ml-1">An error occurred.</div>
      </p>
      <div className="mt-20 text-center">
        <Link href="/">
          <a className="px-5 py-3">Back to Home</a>
        </Link>
      </div>
    </>
  );
};

Page.getLayout = (page) => <Layout title="An error occurred">{page}</Layout>;

export default Page;
