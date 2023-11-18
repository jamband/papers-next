import { API_URL } from "@/_constants/api";
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
      notification({
        message:
          "A new verification link has been sent to the email address you provided during registration.",
      });
      return;
    }

    if (response.status === 429) {
      notification({
        message:
          "There are too many requests. Please wait for a while and try again.",
        color: "yellow",
      });
      return;
    }
  };

  return {
    action,
  } as const;
};
