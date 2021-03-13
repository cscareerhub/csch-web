import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import InfoBox from '@components/InfoBox/InfoBox';
import styles from './index.module.scss';

const Home = (): ReactElement => (
  <>
    <HeadComponent title="CS Career Hub | Home" />
    <div>
      <Layout useHeader>
        <div className={styles.infoBoxContainer}>
          <InfoBox
            className={styles.infoBox}
            title="Challenge Yourself"
            text="Participate in daily programming challenges, solve leetcode problems with others, and collaborate on projects with others in the community."
            actionText="Solve a Challenge"
            link="https://discord.gg/6EyEDKk"
          />
          <InfoBox
            className={styles.infoBox}
            title="Prep for the Job Hunt"
            text="Need more eyes on your resume? The CSCH community can help you improve it for your next job-hunting season. Need to polish your interviewing skills? Trade live mock interviews with peers."
            actionText="Polish Your Skills"
            link="https://discord.gg/6EyEDKk"
          />
          <InfoBox
            className={styles.infoBox}
            title="Read Our Wiki &amp; FAQ"
            text="Read through the channels, pinned posts, and our comprehensive Wiki &amp; FAQ to learn more about CS careers, the industry, and the experiences of others."
            actionText="Read the Wiki"
            link="https://app.gitbook.com/@cscareerhub/s/csch-wiki-and-faq/"
          />
          <InfoBox
            className={styles.infoBox}
            title="Crowdsource Advice"
            text="Engage in career and programming discussion. Get advice from students, experienced devs, and recruiters. Members of this community come from all backgrounds."
            actionText="Join the Community"
            link="https://discord.gg/6EyEDKk"
          />
        </div>
      </Layout>
    </div>
  </>
);

export default Home;
