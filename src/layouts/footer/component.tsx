import Link from "next/link";
import { LinkExternal } from "../../components/link-external";

export const Component: React.FC = () => (
  <footer className="bg-gray-800 py-3 text-center">
    <nav aria-label="Footer navigation">
      <Link href="/about" className="mx-1 p-3 no-underline hover:text-current">
        About
      </Link>
      <Link
        href="/contact"
        className="mx-1 p-3 no-underline hover:text-current"
      >
        Contact
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
