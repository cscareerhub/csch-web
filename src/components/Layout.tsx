import React, { ReactElement } from 'react';
import Nav from '@components/Nav/Nav';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  useHeader?: boolean;
}

const Layout = (props: LayoutProps): ReactElement => {
  const { children, useHeader } = props;
  return (
    <>
      <Nav />
      <main>
        {useHeader && (
          <Header
            title="We are a community of software engineers on a mission of lifelong learning"
            text="CS Career Hub was created to help guide engineers at any point in their career. Over 20,000 users have joined our community, ranging from first-year students to hiring managers. In the past few years, we've facilitated thousands of mock interviews and resume reviews with candidates. With plenty of plans on the roadmap, you can expect even more to come."
            actionText="Join CS Career Hub"
          />
        )}
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  useHeader: false
};

export default Layout;
