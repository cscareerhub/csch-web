import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = (): ReactElement => (
  <>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/csch-statico-transparent.png" height={45} width={45} alt="CSCH gear logo" loading="lazy" />
        </a>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/event-calendar">
          <a>Event Calendar</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <a
          className={styles.hideOnSmallMobile}
          href="https://app.gitbook.com/@cscareerhub/s/csch-wiki-and-faq/"
          target="_blank"
          rel="noreferrer"
        >
          Wiki &amp; FAQ
        </a>
        <Link href="/community-rules">
          <a className={styles.hideOnMobile}>Community Rules</a>
        </Link>
        <Link href="/code-of-conduct">
          <a className={styles.hideOnTablet}>Code of Conduct</a>
        </Link>
        <Link href="/team">
          <a className={styles.hideOnTablet}>Team</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  </>
);

export default Nav;
