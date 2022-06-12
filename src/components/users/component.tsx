import { IconExclamation } from "../../icons/exclamation";
import { Button } from "../button";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    {props.users?.map((user) => (
      <div key={user.id}>
        <div>
          <span className="text-gray-400">Name: </span>
          <span className="font-bold">{user.name}</span>
        </div>
        <div>
          <span className="text-gray-400">Email: </span>
          <span className="font-bold">{user.email}</span>
        </div>
        <div>
          <span className="text-gray-400">Email verified at: </span>
          <span className="font-bold">{user.email_verified_at}</span>
        </div>
        <div>
          <span className="text-gray-400">Created at: </span>
          <span className="font-bold">{user.created_at}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-400">Updated at: </span>
          <span className="font-bold">{user.updated_at}</span>
        </div>
        <Button
          type="button"
          onClick={() => props.deleteUser(user.id)}
          color="red"
        >
          <IconExclamation className="mr-0.5 h-4 w-4 align-[-0.15em]" />
          Delete
        </Button>
        <hr className="mt-3 mb-10" />
      </div>
    ))}
  </>
);
