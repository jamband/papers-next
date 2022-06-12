import { ExternalLink } from "../components/external-link";
import { APP_DESCRIPTION } from "../constants/app";
import { IconExternalLink } from "../icons/external-link";
import { Page } from "../layouts/page";

export default function View() {
  return (
    <Page title="About">
      <h1 className="mb-5">About</h1>
      <p className="mb-5">{APP_DESCRIPTION}</p>
      <p>
        This website is an open source project. See{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next"
          className="inline-flex items-center"
        >
          GitHub jamband/papers-next
          <IconExternalLink className="ml-0.5 h-4 w-4" />
        </ExternalLink>{" "}
        for details.
      </p>
    </Page>
  );
}
