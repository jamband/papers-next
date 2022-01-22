import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { API_USER_KEY } from "~/constants/api";
import { http } from "~/utils/http";
import { useNotificationAction } from "./notification";

type Logout = {
  asAdmin: boolean;
};

export const useLogout = ({ asAdmin }: Logout) => {
  const { mutate } = useSWRConfig();
  const { notification } = useNotificationAction();
  const { push } = useRouter();

  const logout = async () => {
    const res = await http(asAdmin ? "/admin/logout" : "/logout", {
      method: "POST",
    });

    if (res.ok) {
      mutate(API_USER_KEY, undefined).then(() => {
        push("/").then(() => {
          notification({ message: "Logged out successfully." });
        });
      });
    }
  };

  return {
    logout,
  } as const;
};
