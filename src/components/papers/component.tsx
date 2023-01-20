import { IconClock } from "@/icons/clock";
import { IconTrash } from "@/icons/trash";
import Link from "next/link";
import { ActionButton } from "../action-button";
import { ActionLink } from "../action-link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.papers.map((paper) => (
      <div key={paper.id}>
        <h2 className="mb-3">
          <Link href={`/papers/${paper.id}`}>{paper.title}</Link>
        </h2>
        <div className="mb-3">{paper.body}</div>
        <div className="mb-1 text-sm text-gray-400">
          <IconClock className="mr-0.5 h-4 w-4 align-[-0.2em]" />
          {paper.created_at}
        </div>
        <ActionLink
          href={`/papers/${paper.id}/update`}
          className="mr-3 text-sm"
        >
          Update →
        </ActionLink>
        <ActionButton
          type="button"
          onClick={() => props.deletePaper(paper.id)}
          className="py-0.5 text-sm"
        >
          Delete
          <IconTrash className="ml-0.5 h-4 w-4 align-[-0.15em]" />
        </ActionButton>
        <hr className="mt-3 mb-10" />
      </div>
    ))}
  </>
);
