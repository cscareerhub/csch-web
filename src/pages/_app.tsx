import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import Layout from '@components/Layout';
import * as ga from '../lib/googleAnalytics';
import '@styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Application = ({ Component, pageProps }): ReactElement => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return Component.displayName ? (
    <Layout
      title={Component.displayName}
      hideTopButton
      wideLayout={Component.wideLayout}
      useHeader={Component.useHeader}
    >
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Layout title="CS Career Hub" hideFrontMatterHack>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Application;
