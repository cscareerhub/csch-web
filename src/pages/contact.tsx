import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm/ContactForm';
import styles from './contact.module.scss';

const Contact = (): ReactElement => (
  <>
    <HeadComponent title="Contact" />
    <Layout>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <p>
            If you have questions, concerns, feedback, or anything else that requires the attention of CS Career Hub
            staff, feel free to reach out by:
          </p>
          <ul>
            <li>
              Asking in the public
              <a href="https://discord.com/channels/334891772696330241/529700192111296513"> #ask-a-mod </a>
              channel in our Discord server
            </li>
            <li>
              DMing the CSCH Megabot using the
              <a href="https://github.com/cscareerhub/megabot/blob/master/specs/modchat.spec.md"> modmail command </a>
              <code>++mc</code> (or <code>++mc -a</code> for anonymity) to message the whole team on Discord (must be in
              the server to do this)
            </li>
            <li>Sending a message in the below contact form where name, username, and email are all optional</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Layout>
  </>
);

export default Contact;
