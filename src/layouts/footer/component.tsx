import Link from "next/link";
import { ExternalLink } from "../../components/external-link";

export const Component: React.FC = () => (
  <footer className="bg-gray-700 py-3">
    <nav aria-label="Footer navigation" className="flex justify-center gap-x-3">
      <Link href="/about">
        <a className="rounded px-4 py-1 text-gray-100 no-underline active:bg-gray-600">
          About
        </a>
      </Link>
      <Link href="/contact">
        <a className="rounded px-4 py-1 text-gray-100 no-underline active:bg-gray-600">
          Contact
        </a>
      </Link>
      <ExternalLink
        href="https://github.com/jamband/papers-next"
        className="rounded px-4 py-1 text-gray-100 no-underline active:bg-gray-600"
      >
        GitHub
      </ExternalLink>
    </nav>
  </footer>
);
