import Link from "next/link";
import { APP_NAME } from "~/constants/app";

export const Component: React.FC = () => (
  <header>
    <nav
      className="fixed z-20 w-full bg-gray-800 py-3 text-center font-semibold"
      aria-label="Header navigation"
    >
      <Link href="/admin">
        <a className="p-3 no-underline hover:text-current">{APP_NAME}</a>
      </Link>
    </nav>
  </header>
);
