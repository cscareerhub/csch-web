import React, { ReactElement } from 'react';
import '@styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Application = ({ Component, pageProps }): ReactElement => <Component {...pageProps} />;

export default Application;
