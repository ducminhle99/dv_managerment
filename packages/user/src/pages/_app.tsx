import type { AppProps } from 'next/app';
import 'reflect-metadata';
import 'styles/index.css';
import 'styles/antd/antd.less';
import { wrapper } from 'store/index';
import Root from 'common/containers/root';
import nProgress from 'nprogress';
import Router from 'next/router';
import 'simplebar/dist/simplebar.min.css';
import Head from 'next/head';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <Root>
        <Component {...pageProps} />
      </Root>
    </>
  );
}

export default wrapper.withRedux(App);
