import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import ContactForm from '@components/ContactForm/ContactForm';
import styles from './contact.module.scss';

const Contact = (): ReactElement => (
  <>
    <HeadComponent title="Contact" />
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
