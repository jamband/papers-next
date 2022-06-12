import Link from "next/link";
import { ExternalLink } from "../../components/external-link";

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
      <ExternalLink
        href="https://github.com/jamband/papers-next"
        className="mx-1 p-3 no-underline hover:text-current"
      >
        GitHub
      </ExternalLink>
    </nav>
  </footer>
);
