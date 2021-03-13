import Layout from '@components/Layout';
import React, { ReactElement } from 'react';
import styles from './success.module.scss';

const Success = (): ReactElement => (
  <Layout>
    <div className={styles.successContainer}>
      <p>Message successfully submitted!</p>
      <p>
        If you sent a message that requires a reply, watch out for a message on Discord if you used your username with
        an ID. Otherwise, we'll write back to the email provided.
      </p>
    </div>
  </Layout>
);

export default Success;
