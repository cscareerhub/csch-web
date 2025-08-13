import React, { ReactElement } from 'react';

import InfoBox from '@components/InfoBox/InfoBox';
import Testimonials from '@components/Testimonials/Testimonials';
import styles from './index.module.scss';
import Head from "next/head";

const Home = (): ReactElement => (
  <>
    <Head>
        <title title="Wiki & FAQ">Wiki & FAQ</title>
        <meta name="description" content="Explore the CS Career Hub Wiki for detailed guides, resources, and answers to common questions."/>
        <meta property="og:description" content="Explore the CS Career Hub Wiki for detailed guides, resources, and answers to common questions."/>
        <meta property="twitter:description" content="Explore the CS Career Hub Wiki for detailed guides, resources, and answers to common questions."/>
      </Head>
    <div>
      <div className={styles.infoBoxContainer}>
        <InfoBox
          className={styles.infoBox}
          title="Challenge Yourself"
          text="Participate in daily programming challenges, solve leetcode problems with others, and collaborate on projects with others in the community."
          actionText="Solve a Challenge"
          link="https://discord.gg/cscareerhub"
        />
        <InfoBox
          className={styles.infoBox}
          title="Prep for the Job Hunt"
          text="Need more eyes on your resume? The CSCH community can help you polish it. Need to dust off your interviewing skills? Trade live mock interviews with peers and industry professionals."
          actionText="Polish Your Skills"
          link="https://discord.gg/cscareerhub"
        />
        <InfoBox
          className={styles.infoBox}
          title="Read Our Wiki &amp; FAQ"
          text="Read through the channels, pinned posts, and our comprehensive Wiki &amp; FAQ to learn more about CS careers, the industry, and the experiences of others."
          actionText="Read the Wiki"
          link="/wiki-faq"
        />
        <InfoBox
          className={styles.infoBox}
          title="Crowdsource Advice"
          text="Engage in career and programming discussion. Get advice from students, experienced devs, and recruiters. Members of this community come from all backgrounds."
          actionText="Join the Community"
          link="https://discord.gg/cscareerhub"
        />
      </div>
      <Testimonials/>
    </div>
  </>
);

export default Home;

Home.displayName = 'Home';
Home.wideLayout = true;
Home.useHeader = true;
