import { ActionLink } from "~/components/action-link";
import { Papers } from "~/components/papers";
import { useRequireVerified } from "~/hooks/require";
import { IconPencil } from "~/icons/pencil";
import { Page } from "~/layouts/page";

export default function View() {
  useRequireVerified();

  return (
    <Page title="Papers">
      <h1 className="mb-5">Papers</h1>
      <ActionLink
        href="/papers/create"
        className="inline-flex items-center py-0.5 text-sm"
      >
        <div className="mr-1">Create New Paper</div>
        <IconPencil className="h-4 w-4" />
      </ActionLink>
      <hr className="my-10" />
      <Papers />
    </Page>
  );
}
