import { API_URL } from "@/_constants/api";
import {
  NOTIFICATION_NEW_VERIFICATION_LINK_SENT,
  NOTIFICATION_TOO_MANY_REQUEST,
} from "@/_constants/notification";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";

export const useVerifyEmail = () => {
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/email/verification-notification`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": getCsrfToken(),
      },
    });

    if (response.ok) {
      notification({ message: NOTIFICATION_NEW_VERIFICATION_LINK_SENT });
      return;
    }

    if (response.status === 429) {
      notification({
        message: NOTIFICATION_TOO_MANY_REQUEST,
        color: "yellow",
      });
      return;
    }
  };

  return {
    action,
  } as const;
};
