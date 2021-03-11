import React, { ReactElement } from 'react';
import styles from './FooterSocial.module.scss';

interface FooterSocialProps {
  image: JSX.Element;
  link: string;
}

const FooterSocial = (props: FooterSocialProps): ReactElement => {
  const { image, link } = props;

  return (
    <a target="_blank" href={link} rel="noreferrer">
      <div className={styles.footerSocial}>{image}</div>
    </a>
  );
};

export default FooterSocial;
