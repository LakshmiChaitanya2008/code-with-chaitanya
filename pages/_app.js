import "../styles/global.css";
import Link from "next/link";
import "highlight.js/styles/base16/material-darker.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/">
        <a className="title">
          <h1>Code With Chaitanya</h1>
        </a>
      </Link>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
