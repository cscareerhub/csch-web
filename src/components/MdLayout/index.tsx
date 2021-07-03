import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import styles from './MdLayout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  hideTopButton?: boolean;
  frontMatter?: {
    title: string;
    date: string;
    hideTopButton?: boolean;
  } | null;
}

const MdLayout = (props: LayoutProps): ReactElement => {
  const { children, frontMatter, title, hideTopButton } = props;
  return (
    <>
      <HeadComponent title={frontMatter?.title || title} />
      <Layout>
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
            {(frontMatter ? !frontMatter?.hideTopButton : !hideTopButton) && (
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

MdLayout.defaultProps = {
  title: 'CS Career Hub',
  hideTopButton: false,
  frontMatter: null
};

export default MdLayout;
