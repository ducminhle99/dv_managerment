import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/assets/favicon_io/site.webmanifest" />
          <link rel="icon" type="image/x-icon" href="/assets/favicon_io/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async type="text/javascript" src="/scripts/form.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
