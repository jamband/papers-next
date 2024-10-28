import { API_URL } from "@/_constants/api";

export const generateCsrfCookie = async () => {
  await fetch(`${API_URL}/csrf-cookie`, {
    credentials: "include",
  }).catch((error) => {
    console.error(error);
  });
};

export const getCsrfToken = () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((_) => _.startsWith("XSRF-TOKEN")) || "";
  return decodeURIComponent(cookie.split("=")[1]);
};
