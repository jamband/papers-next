import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";

export const useVerifyEmail = () => {
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    await fetch(`${API_URL}/email/verification-notification`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": getCsrfToken(),
      },
    })
      .then((response) => {
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
          });
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    action,
  } as const;
};
