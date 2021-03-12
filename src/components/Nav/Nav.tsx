import React, { ReactElement } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import styles from './Nav.module.scss';

const Nav = (): ReactElement => (
  <>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          {/* <Image src="/csch-statico-transparent.png" height={45} width={45} alt="CSCH gear logo" /> */}
        </a>
      </Link>
      <div className={styles.navLinks}>
        <a href="https://app.gitbook.com/@cscareerhub/s/csch-wiki-and-faq/" target="_blank" rel="noreferrer">
          Wiki &amp; FAQ
        </a>
        <Link href="/team">
          <a>Team</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  </>
);

export default Nav;
