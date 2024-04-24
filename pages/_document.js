import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Script strategy="lazyOnload">
          {`
          if (typeof MauticSDKLoaded == 'undefined') {
            var MauticSDKLoaded = true;
            var head            = document.getElementsByTagName('head')[0];
            var script          = document.createElement('script');
            script.type         = 'text/javascript';
            script.src          = 'https://mautic.intz.scarf.gg/media/js/mautic-form.js?v42b75280';
            script.onload       = function() {
                MauticSDK.onLoad();
            };
            head.appendChild(script);
            var MauticDomain = 'https://mautic.intz.scarf.gg';
            var MauticLang   = {
              'submittingMessage': "Por favor, aguarde..."
            }
          } else if (typeof MauticSDK != 'undefined') {
            MauticSDK.onLoad();
          }
        `}
        </Script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
