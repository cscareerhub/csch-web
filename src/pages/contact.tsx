import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import ContactForm from '@components/ContactForm/ContactForm';
import styles from './contact.module.scss';

const Contact = (): ReactElement => (
  <>
    <HeadComponent title="CS Career Hub | Home" />
    <Layout>
      <div className={styles.contactContainer}>
        <ContactForm />
      </div>
    </Layout>
  </>
);

export default Contact;
