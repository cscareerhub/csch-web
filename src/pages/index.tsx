import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import InfoBox from '@components/InfoBox/InfoBox';
import styles from './index.module.scss';

const Home = (): ReactElement => (
  <>
    <HeadComponent title="CS Career Hub | Home" />
    <div className="home-container">
      <Layout useHeader>
        <div className={styles.infoBoxContainer}>
          <InfoBox
            className={styles.infoBox}
            title="Challenge Yourself"
            text="Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private."
            actionText=""
            link=""
          />
          <InfoBox
            className={styles.infoBox}
            title="Polish Your Resume"
            text="Just starting out? Browsing, forking, and playing with Pens is a great way to understand how they were built and how code works. Teaching a class? Professor mode lets your students to see and comment on real-time Pen updates."
            actionText=""
            link=""
          />
          <InfoBox
            className={styles.infoBox}
            title="Read &amp; Learn"
            text="Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode."
            actionText=""
            link=""
          />
          <InfoBox
            className={styles.infoBox}
            title="Contribute &amp; Develop"
            text="Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode."
            actionText=""
            link=""
          />
        </div>
      </Layout>
    </div>
  </>
);

export default Home;
