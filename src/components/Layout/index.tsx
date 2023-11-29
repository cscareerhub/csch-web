import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Nav from '@components/Nav/Nav';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  hideTopButton?: boolean;
  frontMatter?: {
    title: string;
    date: string;
    hideTopButton?: boolean;
  } | null;
  useHeader?: boolean;
  wideLayout?: boolean;
  hideFrontMatterHack?: boolean;
}

// TODO: fix frontMatter prop, will no longer work due to removal of next-mdx-enhanced
const Layout = (props: LayoutProps): ReactElement => {
  const { children, frontMatter, title, hideTopButton, useHeader, wideLayout, hideFrontMatterHack } = props;

  return (
    <>
      <HeadComponent title={frontMatter?.title || title} />
      <Nav />
      <main>
        {useHeader && (
          <Header
            title="We are a community of software engineers on a mission of lifelong learning"
            text="CS Career Hub was created to help guide engineers at any point in their career. Over 20,000 users have joined our community, ranging from first-year students to hiring managers. In the past few years, we've facilitated thousands of mock interviews and resume reviews with candidates. With plenty of plans on the roadmap, you can expect even more to come."
            actionText="Join CS Career Hub"
          />
        )}
        {wideLayout ? (
          children
        ) : (
          <div className={styles.container}>
            <div className={`${styles.content} ${hideFrontMatterHack ? styles.hideFrontMatterHack : ''}`}>
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
        )}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'CS Career Hub',
  hideTopButton: false,
  frontMatter: null,
  useHeader: false,
  wideLayout: false
};

export default Layout;
