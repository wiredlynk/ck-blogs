import "~/styles/globals.css";
import "~/styles/mdx.css";

export default function Skawe({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
