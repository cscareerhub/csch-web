import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';

const Team = (): ReactElement => (
  <>
    <HeadComponent title="CS Career Hub | Home" />
    <div className="home-container">
      <Layout>
        <div />
      </Layout>
    </div>
  </>
);

export default Team;
