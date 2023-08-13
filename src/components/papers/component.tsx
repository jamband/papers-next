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
        <div className="flex gap-3 text-sm">
          <ActionLink href={`/papers/${paper.id}/update`}>Update →</ActionLink>
          <ActionButton
            type="button"
            onClick={() => props.deletePaper(paper.id)}
          >
            Delete
            <IconTrash className="ml-0.5 h-4 w-4 align-[-0.2em]" />
          </ActionButton>
        </div>
        <hr className="mb-10 mt-3" />
      </div>
    ))}
  </>
);
