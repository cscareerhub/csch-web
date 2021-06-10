import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import styles from './MdLayout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hideTopButton: boolean;
}

const MdLayout = (props: LayoutProps): ReactElement => {
  const { children, title, hideTopButton } = props;
  return (
    <>
      <HeadComponent title={title} />
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
            {!hideTopButton && (
              <div className="topButton">
                <a
                  onClick={() => window.scrollTo({ top: 0 })}
                  onKeyDown={() => window.scrollTo({ top: 0 })}
                  role="button"
                  tabIndex={0}
                >
                  Go to top
                </a>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MdLayout;
