import CookieModal from "@/components/CookieModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (function (d, w: any, c) {
      w.ChatraID = "7hpiLmZMrk7MiRGCG";
      var s = d.createElement("script");
      w[c] =
        w[c] ||
        function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
      s.async = true;
      s.src = "https://call.chatra.io/chatra.js";
      if (d.head) d.head.appendChild(s);
    })(document, window, "Chatra");
  }, []);

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="https://digitaldevils.by/fonts/xn7gYHE41ni1AdIRggOxSuXd.woff2" as="font" type="font/woff2" crossOrigin="anonymous"></link>
        <link rel="preload" as="video" href="https://digitaldevils.by/resources/main.mp4"></link>
        <link rel="preload" as="video" href="https://digitaldevils.by/resources/main2.mp4"></link>
      </Head>
      <Component {...pageProps} />
      <CookieModal />
    </>
  );
}
