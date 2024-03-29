import { DispatchContext, StateContext } from "@/_contexts/notification";
import type { State } from "@/_reducers/notification";
import { useCallback, useContext } from "react";

export const useNotificationState = () => {
  return useContext(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = useContext(DispatchContext);

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
