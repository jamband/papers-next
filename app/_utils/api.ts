import { API_CSRF_COOKIE, API_URL } from "@/_constants/api";

export const generateCsrfCookie = async () => {
  await fetch(API_URL + API_CSRF_COOKIE, {
    cache: "no-store",
    credentials: "include",
  });
};

export const getCsrfToken = () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((_) => _.startsWith("XSRF-TOKEN")) || "";
  return decodeURIComponent(cookie.split("=")[1]);
};
