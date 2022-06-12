import { ExternalLink } from "../components/external-link";
import { IconExternalLink } from "../icons/external-link";
import { Page } from "../layouts/page";

export default function View() {
  return (
    <Page title="Contact">
      <h1 className="mb-5">Contact</h1>
      <p>
        Please to the message via{" "}
        <ExternalLink
          href="https://twitter.com/livejam_db"
          className="inline-flex items-center"
        >
          Twitter
          <IconExternalLink className="ml-0.5 h-4 w-4" />
        </ExternalLink>{" "}
        or{" "}
        <ExternalLink
          href="https://github.com/jamband/papers-next/issues"
          className="inline-flex items-center"
        >
          GitHub Issues
          <IconExternalLink className="ml-0.5 h-4 w-4" />
        </ExternalLink>
        .
      </p>
    </Page>
  );
}
