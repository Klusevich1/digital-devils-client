import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Html lang="ru">
      <Head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLZBTPDJ');
          `}
        </Script>
        <link rel="preload" href="/styles/fonts.css" as="style" />
        <link rel="stylesheet" href="/styles/fonts.css" />
        {isProduction && (
          <>
            <meta name="yandex-verification" content="8a71da99f472c773" />
          </>
        )}

        {isProduction && (
          <>
            <meta
              name="google-site-verification"
              content="pixrXY-F4P5rROIojTM8avOQJLwfkHRsjbBG827jdSo"
            />
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {isProduction && (
          <>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(99204054, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
              }}
            />
            <noscript>
              <div>
                <img
                  src="https://mc.yandex.ru/watch/99204054"
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-K8P2PGLXKZ"
            />
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-K8P2PGLXKZ');
              `,
              }}
            />
          </>
        )}
      </body>
    </Html>
  );
}
