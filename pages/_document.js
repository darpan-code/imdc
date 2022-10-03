/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ===== CSS FILES ===== */}
          {/* ===== Bootstrap CSS ===== */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />

          {/* ===== Main CSS File ===== */}
          <link
            rel="stylesheet"
            href="/assets/styles/main.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/styles/reset.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/styles/custom.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/fonts/linear-icons-font/style.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/assets/fonts/fontawesome-free-5.12.1-web/css/all.min.css"
            type="text/css"
          />
          {/* ===== PREFETCH ===== */}
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin
          />
          {/* ===== GOOGLE FONT ===== */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          {/* ===== FAVICONS ===== */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/*  =====  SCRIPTS  =====  */}
          <script
            async
            defer
            src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.PRISMIC_ID}`}
          ></script>
          <script
            defer
            data-domain={`${process.env.PRISMIC_ID}.com`}
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
