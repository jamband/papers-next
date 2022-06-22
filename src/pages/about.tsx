import { ExternalLink } from "../components/external-link";
import { APP_DESCRIPTION } from "../constants/app";
import { IconExternalLink } from "../icons/external-link";
import { Layout } from "../layouts/layout";

export default function Page() {
  return (
    <>
      <h1 className="mb-5">About</h1>
      <p className="mb-5">{APP_DESCRIPTION}</p>
      <p>
        This website is an open source project. See{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next"
          className="text-green-600"
        >
          GitHub jamband/papers-next
          <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
        </ExternalLink>{" "}
        for details.
      </p>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => (
  <Layout title="About">{page}</Layout>
);
