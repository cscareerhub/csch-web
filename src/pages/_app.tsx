import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import * as ga from '../lib/ga';
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

  return <Component {...pageProps} />;
};

export default Application;
