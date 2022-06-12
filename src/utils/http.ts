import { API_CSRF_COOKIE, API_URL } from "../constants/api";

type Init = Pick<RequestInit, "headers"> & {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH";
  body?: Record<string, boolean | number | string | undefined> | null;
  params?: Record<string, string>;
};

const csrfToken = () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((_) => _.startsWith("XSRF-TOKEN")) || "";
  return decodeURIComponent(cookie.split("=")[1]);
};

export const http = async (input: RequestInfo, init?: Init) => {
  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (["POST", "PUT", "DELETE", "PATCH"].includes(init?.method || "")) {
    await fetch(API_URL + API_CSRF_COOKIE, {
      credentials: "include",
    });

    headers["Content-Type"] = "application/json";
    headers["X-XSRF-TOKEN"] = csrfToken();
  }

  const params = init?.params
    ? new URLSearchParams(init.params).toString()
    : "";

  return fetch(`${API_URL}${input}${params}`, {
    method: init?.method || "GET",
    credentials: "include",
    headers: { ...headers, ...init?.headers },
    body: init?.body ? JSON.stringify(init.body) : null,
  });
};
