import { DispatchContext, StateContext } from "@/contexts/notification";
import type { State } from "@/reducers/notification";
import { useCallback, useContext } from "react";

export const useNotificationState = () => {
  return useContext(StateContext);
};

export const useNotificationAction = () => {
  const dispatch = useContext(DispatchContext);

  const notification = useCallback(
    (payload: State) => {
      payload.color = payload.color ?? "green";
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
