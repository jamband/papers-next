import { ExternalLink } from "../components/external-link";
import { IconExternalLink } from "../icons/external-link";
import { Page } from "../layouts/page";

export default function View() {
  return (
    <Page title="Contact">
      <h1 className="mb-5">Contact</h1>
      <p>
        Please to the message via{" "}
        <ExternalLink href="https://twitter.com/livejam_db">
          Twitter
          <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
        </ExternalLink>{" "}
        or{" "}
        <ExternalLink href="https://github.com/jamband/papers-next/issues">
          GitHub Issues
          <IconExternalLink className="h-4 w-4 align-[-0.125em]" />
        </ExternalLink>
        .
      </p>
    </Page>
  );
}
