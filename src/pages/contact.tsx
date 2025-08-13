import React, { ReactElement } from 'react';

import ContactForm from '@components/ContactForm/ContactForm';
import styles from './contact.module.scss';
import Head from 'next/head';

const Contact = (): ReactElement => (
  <>
    <Head>
      <title title="Contact">Contact</title>
      <meta name="description" content="Get in touch with CS Career Hub staff for questions, feedback, or concerns via our #ask-a-mod Discord channel or the contact form below. Name, username, and email are optional."/>
      <meta property="og:description" content="Need assistance or want to share feedback? Contact CS Career Hub staff on Discord's #ask-a-mod or via our simple contact form."/>
      <meta property="twitter:description" content="Need assistance or want to share feedback? Contact CS Career Hub staff on Discord's #ask-a-mod or via our simple contact form."/>
    </Head>
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <p>
          If you have questions, concerns, feedback, or anything else that requires the attention of CS Career Hub
          staff, feel free to reach out by:
        </p>
        <ul>
          <li>
            Asking in the public
            <a href="https://discord.com/channels/334891772696330241/1040321855581593681"> #ask-a-mod </a>
            channel in our Discord server
          </li>
          <li>Sending a message in the below contact form where name, username, and email are all optional</li>
        </ul>
      </div>
      <ContactForm />
    </div>
  </>
);

export default Contact;

Contact.displayName = 'Contact';
