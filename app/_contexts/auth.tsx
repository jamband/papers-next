"use client";

import { createContext, useReducer } from "react";
import type { Dispatch, State } from "@/_reducers/auth";
import { initialState, reducer } from "@/_reducers/auth";

export const StateContext = createContext<State>({} as State);
export const DispatchContext = createContext<Dispatch>({} as Dispatch);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>{props.children}</DispatchContext>
    </StateContext>
  );
};
