import { useRouter } from "next/router";
import { useEffect } from "react";
import { NOTIFICATION_VERIFICATION_VERIFIED } from "../constants/notification";
import { useAuth } from "./auth";
import { useNotificationAction } from "./notification";

export const useVerificationNotification = () => {
  const { authIsLoading, auth } = useAuth();
  const { query } = useRouter();
  const { notification } = useNotificationAction();

  useEffect(() => {
    if (authIsLoading) return;

    if (auth?.is_verified && query.verified === "1") {
      notification({ message: NOTIFICATION_VERIFICATION_VERIFIED });
    }
  }, [authIsLoading, auth, query, notification]);
};
