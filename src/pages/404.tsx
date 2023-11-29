import React, { ReactElement } from 'react';
import styles from './404.module.scss';

const NotFound = (): ReactElement => (
  <div className={styles.notFoundContainer}>
    <p>404 | Page Not Found</p>
  </div>
);

export default NotFound;

NotFound.displayName = 'Not Found';
