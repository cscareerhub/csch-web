import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import styles from './MdLayout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const MdLayout = (props: LayoutProps): ReactElement => {
  const { children, title } = props;
  return (
    <>
      <HeadComponent title={title} />
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </Layout>
    </>
  );
};

export default MdLayout;
