import Link from "next/link";
import { ActionButton } from "../../../components/action-button";
import { ActionLink } from "../../../components/action-link";
import { FailedToFetch } from "../../../components/failed-to-fetch";
import { Loading } from "../../../components/loading";
import { useDeletePaper, usePaper } from "../../../hooks/paper";
import { useRequireVerified } from "../../../hooks/require";
import { IconTrash } from "../../../icons/trash";
import { Layout } from "../../../layouts/layout";

export default function Page() {
  useRequireVerified();

  const {
    error: paperError,
    isLoading: paperIsLoading,
    data: paper,
  } = usePaper();

  const { deletePaper } = useDeletePaper();

  if (paperError) {
    return (
      <>
        <h1 className="mb-5">Faild to fetch</h1>
        <FailedToFetch className="mb-10" />
        <div className="text-center">
          <Link href="/papers">Back to Papers</Link>
        </div>
      </>
    );
  }

  if (paperIsLoading) {
    return <Loading className="flex items-center justify-center" />;
  }

  return (
    <>
      <h1 className="mb-5">{paper.title}</h1>
      <div className="mb-3">{paper.body}</div>
      <div className="mb-1 text-sm text-gray-400">
        <div>Created at: {paper.created_at}</div>
        <div>Updated at: {paper.updated_at}</div>
      </div>
      <ActionLink href={`/papers/${paper.id}/update`} className="mr-3 text-sm">
        Update →
      </ActionLink>
      <ActionButton
        type="button"
        onClick={() => deletePaper(paper.id)}
        className="py-0.5 text-sm"
      >
        Delete
        <IconTrash className="ml-0.5 h-4 w-4 align-[-0.2em]" />
      </ActionButton>
      <hr className="mt-4" />
      <div className="mt-10 text-center md:mt-20">
        <Link href="/papers" className="p-3">
          ← Back to Papers
        </Link>
      </div>
    </>
  );
}

Page.getLayout = (page: React.ReactElement) => {
  return <Layout title="View">{page}</Layout>;
};
