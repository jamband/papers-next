import Link from "next/link";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Link href={props.href} className={props.className}>
    {props.children}
  </Link>
);
