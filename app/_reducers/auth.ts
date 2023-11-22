import type { Auth } from "@/_types/auth";

export type State = Auth | Error | null | undefined;

export const initialState: State = undefined;

type SetAction = {
  type: "set";
  payload: State;
};

type ClearAction = {
  type: "clear";
};

export type Action = SetAction | ClearAction;

export type Dispatch = (action: Action) => void;

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set":
      return action.payload;
    case "clear":
      return initialState;
    default:
      return state;
  }
};
