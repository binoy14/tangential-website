/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetNavigationQuery } from "@binoy14/cms-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { classnames } from "tailwindcss-classnames";

export interface UiProps {
  links: GetNavigationQuery["allNavigation"][0]["links"];
  title?: string;
}

export function Navigation({ links, title }: UiProps) {
  const [navOpen, setNavOpen] = useState(false);
  const { asPath } = useRouter();

  const onClick = () => setNavOpen((prev) => !prev);

  const linkClasses = classnames("hover:underline", "hover:text-yellow-400");
  const mbUlClasses = classnames(
    "flex",
    "flex-col",
    "items-center",
    "sm:hidden",
    "bg-black",
    "text-white",
    "transition-all",
    {
      "max-h-52": navOpen === true,
      "pb-4": navOpen === true,
      "max-h-0": navOpen === false,
    }
  );

  return (
    <>
      <nav>
        <div className="bg-black w-full h-24 flex items-center pl-4 pr-4 text-white transition-all sm:h-36">
          <h1 className="text-4xl flex-1">{title}</h1>
          {/* Desktop Nav */}
          <ul className="hidden sm:flex">
            {links?.map((navLink) => {
              const { text = "", link } = navLink || {};
              const { current = "" } = link || {};
              const href = `/${current}`;

              const styles = classnames(linkClasses, "mr-6", {
                "text-yellow-400": asPath === href,
              });
              return (
                <li key={href} className={styles}>
                  <Link href={href}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
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
      <ul className={mbUlClasses}>
        {navOpen &&
          links?.map((navLink) => {
            const { text = "", link } = navLink || {};
            const { current = "" } = link || {};
            const href = `/${current}`;

            return (
              <li key={href} className={`mb-6 ${linkClasses}`}>
                <Link href={href}>
                  <a className="text-xl">{text}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Navigation;
