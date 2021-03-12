import React, { ReactElement } from 'react';
import FooterSocial from './FooterSocial';
import styles from './Footer.module.scss';

const Footer = (): ReactElement => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div>
        <p>General Inquiries</p>
        <a className={styles.footerLink} href="mailto:info@cscareerhackers.org">
          info@cscareerhackers.org
        </a>
      </div>
      <div>
        <p>Partnerships</p>
        <a className={styles.footerLink} href="mailto:partners@cscareerhackers.org">
          partners@cscareerhackers.org
        </a>
      </div>
    </div>
    <div className={styles.footerSocials}>
      <FooterSocial
        image={
          <img
            className={styles.footerSocialImage}
            src="/images/discord-logo.png"
            height={25}
            width={25}
            alt="Discord logo"
            loading="lazy"
          />
        }
        link="https://discord.gg/6EyEDKk"
      />
      <FooterSocial
        image={
          <img
            className={styles.footerSocialImage}
            src="/images/reddit-logo.png"
            height={25}
            width={25}
            alt="Reddit logo"
            loading="lazy"
          />
        }
        link="https://www.reddit.com/r/cscareerquestions/comments/a7y8qg/cs_career_hackers_discord_server/"
      />
    </div>
  </footer>
);

export default Footer;
