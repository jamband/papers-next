import { ActionLink } from "@/components/action-link";
import { Papers } from "@/components/papers";
import { useRequireVerified } from "@/hooks/require";
import { IconPencil } from "@/icons/pencil";
import { Layout } from "@/layouts/layout";
import type { PageComponent } from "../_app";

const Page: PageComponent = () => {
  useRequireVerified();

  return (
    <>
      <h1 className="mb-5">Papers</h1>
      <ActionLink href="/papers/create">
        Create New Paper
        <IconPencil className="ml-1 h-4 w-4 align-[-0.125em]" />
      </ActionLink>
      <hr className="my-10" />
      <Papers />
    </>
  );
};

Page.getLayout = (page) => <Layout title="Papers">{page}</Layout>;

export default Page;
