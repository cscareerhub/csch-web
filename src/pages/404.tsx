import Layout from '@components/Layout';
import React, { ReactElement } from 'react';
import styles from './404.module.scss';

const NotFound = (): ReactElement => (
  <Layout>
    <div className={styles.notFoundContainer}>
      <p>404 | Page Not Found</p>
    </div>
  </Layout>
);

export default NotFound;
