import React, { ReactElement } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = (): ReactElement => (
  <form className={styles.contactForm} name="contact" method="POST" action="/success" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" id="name" placeholder="Name" />
    <input type="text" name="username" id="username" placeholder="Username#ID" />
    <input type="email" name="email" id="email" placeholder="Email" />
    <textarea name="message" id="message" placeholder="Message" required />
    <p className={styles.requiredNotation}>*</p>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
