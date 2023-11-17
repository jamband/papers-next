import { API_URL } from "@/_constants/api";
import { useNotificationAction } from "@/_hooks/notification";
import { generateCsrfCookie, getCsrfToken } from "@/_utils/api";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const { notification } = useNotificationAction();

  const action = async () => {
    await generateCsrfCookie();

    const response = await fetch(`${API_URL}/admin/logout`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": getCsrfToken(),
      },
    });

    if (response.ok) {
      router.push("/");
      router.refresh();
      notification({ message: "Logged out successfully." });
      return;
    }
  };

  return {
    action,
  } as const;
};
