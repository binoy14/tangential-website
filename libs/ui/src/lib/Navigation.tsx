/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { useRouter } from "next/router";

interface Link {
  href: string;
  text: string;
}

export interface UiProps {
  links: Link[];
}

export function Navigation({ links }: UiProps) {
  const [navOpen, setNavOpen] = useState(false);
  const { asPath } = useRouter();

  const onClick = () => setNavOpen((prev) => !prev);

  const linkClasses = `hover:underline hover:text-yellow-400`;

  return (
    <>
      <nav>
        <div className={`bg-black w-full h-24 flex items-center pl-4 pr-4 text-white transition-all sm:h-36`}>
          <h1 className="text-4xl flex-1">Binoy Patel</h1>
          {/* Desktop Nav */}
          <ul className="hidden sm:flex">
            {links.map(({ href, text }) => (
              <li key={href} className={`mr-6 ${linkClasses} ${asPath === href ? "text-yellow-400" : ""}`}>
                <Link href={href}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Nav */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={onClick}
            >
              <span className="sr-only">Open Main Menu</span>
              {navOpen ? <MdClose size="24px" /> : <MdMenu size="24px" />}
            </button>
          </div>
        </div>
      </nav>
      <ul
        className={`flex flex-col items-center sm:hidden bg-black text-white transition-all ${
          navOpen ? "max-h-52 pb-4" : "max-h-0"
        }`}
      >
        {navOpen &&
          links.map(({ href, text }) => (
            <li key={href} className={`mb-6 ${linkClasses}`}>
              <Link href={href}>
                <a className="text-xl">{text}</a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Navigation;
