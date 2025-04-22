import CookieModal from "@/components/CookieModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/xn7gYHE41ni1AdIRggOxSuXd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/xn7gYHE41ni1AdIRggqxSuXd.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/xn7gYHE41ni1AdIRggexSg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" as="video" href="/resources/main.mp4"></link>
        <link rel="preload" as="video" href="/resources/main2.mp4"></link>
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
      </Head>
      <Script
        id="chatra-script"
        strategy="lazyOnload"
        src="https://call.chatra.io/chatra.js"
        onLoad={() => {
          if (typeof window !== "undefined") {
            (window as any).ChatraID = "7hpiLmZMrk7MiRGCG";
          }
        }}
      />
      <Component {...pageProps} />
      <CookieModal />
    </>
  );
}
