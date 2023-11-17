export type State = {
  message: string;
  color?: "green" | "yellow";
};

export const initialState: State = {
  message: "",
  color: "green",
};

export type Action =
  | { type: "notification"; payload: State }
  | { type: "clear" };

export type Dispatch = (action: Action) => void;

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "notification":
      return action.payload;
    case "clear":
      return initialState;
    default:
      return state;
  }
};
