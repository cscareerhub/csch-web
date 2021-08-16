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
        <Link href="/wiki-faq">
          <a className={styles.hideOnMobile}>Wiki &amp; FAQ</a>
        </Link>
        <Link href="/team">
          <a className={styles.hideOnMobile}>Team</a>
        </Link>
        <a
          className={styles.hideOnMobile}
          href="https://www.cscareerhub.store/listing/csch-original-collection"
          target="_blank"
          rel="noreferrer"
        >
          Store
        </a>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
    <nav className={styles.secondaryNav}>
      <div className={styles.navLinks}>
        <Link href="/community-rules">
          <a>Community Rules</a>
        </Link>
        <Link href="/code-of-conduct">
          <a>Code of Conduct</a>
        </Link>
      </div>
    </nav>
  </>
);

export default Nav;
