import React, { ReactElement } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = (): ReactElement => (
  <form name="contact" method="POST" className={styles.contactForm}>
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" id="name" placeholder="Name" />
    <input type="email" name="email" id="email" placeholder="Email" />
    <textarea name="message" id="message" placeholder="Message" />
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
