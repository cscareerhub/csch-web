import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import InfoBox from '@components/InfoBox/InfoBox';
import styles from './index.module.scss';
import Testimonial from '@components/Testimonial/Testimonial';

const Home = (): ReactElement => (
  <>
    <HeadComponent title="Home" />
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
      <div className={styles.testimonialContainer}>
      <p className={styles.testimonialHeading}>Testimonals</p>
        <div className={styles.testimonialSection}>
          <Testimonial
              className={styles.testimonial}
              text="I feel like my friends can mostly keep up when I talk tech with them, they just don't have much ambition as far career goes. One of the things groups like CSCH do is they normalize hyper ambition in a way which is pretty nonstandard."
              occupation="Senior Software Engineer at Netflix"
          />
          <Testimonial
              className={styles.testimonial}
              text="CSCH connected me with dozens of senior engineers when I was just an intern. I was surprised to find that this was a kind of access a lot of peers around me did not have. As a result, from very early in my career, I had a unique and deeper insight into the industry. This helped from interviews to negotiations to navigating my first full-time job."
              occupation="Software Engineer at Adobe"
          />
          <Testimonial
              className={styles.testimonial}
              text="I did 10 or so mocks through CSCH before getting an offer at Google a month later. They were all extremely helpful. I also had a public one from Kevin (the founder of CSCH) which lit my butt on fire."
              occupation="Software Engineer at Google"
          />
        </div>
      </div>
    </div>
  </>
);

export default Home;

Home.displayName = 'Home';
Home.wideLayout = true;
Home.useHeader = true;
