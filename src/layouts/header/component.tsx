import Link from "next/link";
import { APP_NAME } from "~/constants/app";

export const Component: React.FC = () => (
  <header>
    <nav
      className="fixed z-20 w-full bg-gray-700 py-4 text-center font-semibold"
      aria-label="Header navigation"
    >
      <Link href="/">
        <a className="rounded px-4 py-2 text-gray-100 no-underline active:bg-gray-600">
          {APP_NAME}
        </a>
      </Link>
    </nav>
  </header>
);
