import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Navigation } from "@binoy14/ui";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Binoy Patel</title>
      </Head>
      <div>
        <Navigation links={links} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
