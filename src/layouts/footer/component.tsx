import Link from "next/link";
import { LinkExternal } from "~/components/link-external";

export const Component: React.VFC = () => (
  <footer className="py-3 text-center bg-gray-800">
    <nav aria-label="Footer navigation">
      <Link href="/about">
        <a className="mx-1 p-3 no-underline hover:text-current">About</a>
      </Link>
      <Link href="/contact">
        <a className="mx-1 p-3 no-underline hover:text-current">Contact</a>
      </Link>
      <LinkExternal
        href="https://github.com/jamband/papers-next"
        className="mx-1 p-3 no-underline hover:text-current"
      >
        GitHub
      </LinkExternal>
    </nav>
  </footer>
);
