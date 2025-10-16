import ScrollToTop from "@/components/Element/ScrollToTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  )
}
