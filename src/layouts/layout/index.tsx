import { useRouter } from "next/router";
import { Component } from "./component";
import type { Props } from "./types";

export const Layout: React.FC<Props> = (props) => {
  const { pathname } = useRouter();

  const pathnames = pathname.split("/");
  const isAdmin = pathnames[1] === "admin" && pathnames[2] !== "login";

  return <Component {...props} isAdmin={isAdmin} />;
};
