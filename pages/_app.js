import "../styles/global.css";
import Header from "../components/Header";
import "highlight.js/styles/base16/onedark.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
