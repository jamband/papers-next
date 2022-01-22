import Link from "next/link";
import { APP_NAME } from "~/constants/app";

export const Component: React.VFC = () => (
  <header>
    <nav
      className="fixed w-full py-3 z-20 font-semibold text-center bg-gray-800"
      aria-label="Header navigation"
    >
      <Link href="/admin">
        <a className="p-3 no-underline hover:text-current">{APP_NAME}</a>
      </Link>
    </nav>
  </header>
);
