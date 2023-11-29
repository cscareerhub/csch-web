import React, { ReactElement } from 'react';
import styles from './success.module.scss';

const Success = (): ReactElement => (
  <div className={styles.successContainer}>
    <p>Message successfully submitted!</p>
    <p>
      If you sent a message that requires a reply and used your username with an ID, watch out for a private message on
      Discord. Otherwise, we'll write back to the email provided.
    </p>
  </div>
);

export default Success;

Success.displayName = 'Success';
