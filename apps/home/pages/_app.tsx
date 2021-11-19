import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Binoy Patel</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
