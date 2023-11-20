import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    await fetch(`${API_URL}/admin/logout`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": getCsrfToken() },
    }).then((response) => {
      if (response.ok) {
        router.push("/");
        notification({ message: "Logged out successfully.", autoClose: true });
        return;
      }
    });
  };

  return {
    action,
  } as const;
};
