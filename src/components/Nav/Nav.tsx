import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = (): ReactElement => (
  <>
    <nav className={styles.nav}>
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>
          <img src="/csch-statico-transparent.png" height={45} width={45} alt="CSCH gear logo" loading="lazy" />
        </a>
      </Link>
      <div className={styles.navLinks}>
        <Link href="/event-calendar" legacyBehavior>
          <a>Event Calendar</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a>Blog</a>
        </Link>
        <Link href="/wiki-faq" legacyBehavior>
          <a className={styles.hideOnMobile}>Wiki &amp; FAQ</a>
        </Link>
        <Link href="/team" legacyBehavior>
          <a className={styles.hideOnMobile}>Team</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
    <nav className={styles.secondaryNav}>
      <div className={styles.navLinks}>
        <Link href="/community-rules" legacyBehavior>
          <a>Community Rules</a>
        </Link>
        <Link href="/code-of-conduct" legacyBehavior>
          <a>Code of Conduct</a>
        </Link>
      </div>
    </nav>
  </>
);

export default Nav;
