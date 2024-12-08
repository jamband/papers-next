import { DispatchContext, StateContext } from "@/_contexts/notification";
import type { State } from "@/_reducers/notification";
import { use, useCallback } from "react";

export const useNotificationState = () => {
  return use(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = use(DispatchContext);

  const notification = useCallback(
    (payload: State) => {
      dispatch({ type: "notification", payload });
    },
    [dispatch],
  );

  const clear = useCallback(() => {
    dispatch({ type: "clear" });
  }, [dispatch]);

  return {
    notification,
    clear,
  } as const;
};
