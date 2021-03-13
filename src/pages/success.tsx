import Layout from '@components/Layout';
import React, { ReactElement } from 'react';
import styles from './success.module.scss';

const Success = (): ReactElement => (
  <Layout>
    <div className={styles.successContainer}>
      <p>Form successfully submitted!</p>
    </div>
  </Layout>
);

export default Success;
