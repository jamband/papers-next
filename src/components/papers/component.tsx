import Link from "next/link";
import { IconClock } from "../../icons/clock";
import { IconTrash } from "../../icons/trash";
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
        <div className="mb-1 flex items-center text-sm text-gray-400">
          <div className="mr-1">
            <IconClock className="h-4 w-4" />
          </div>
          {paper.created_at}
        </div>
        <ActionLink
          href={`/papers/${paper.id}/update`}
          className="mr-3 text-sm"
        >
          Update →
        </ActionLink>
        <ActionButton
          onClick={() => props.deletePaper(paper.id)}
          className="inline-flex items-center py-0.5 text-sm"
        >
          <span className="mr-1">Delete</span>
          <IconTrash className="h-4 w-4" />
        </ActionButton>
        <hr className="mt-3 mb-10" />
      </div>
    ))}
  </>
);
