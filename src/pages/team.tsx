import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import TeamMember from '@components/TeamMember/TeamMember';
import getTeamMembers from 'src/lib/getTeamMembers';
import styles from './team.module.scss';

const Team = ({ teamMembers }): ReactElement => (
  <>
    <HeadComponent title="Team" />
    <Layout>
      <h1 className={styles.teamHeading}>The CS Career Hub Team</h1>

      <div className={styles.teamMembers}>
        {teamMembers
          .filter(member => member.fields.Active)
          .sort((member1, member2) => (member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1))
          .map(member => (
            <TeamMember
              key={member.id}
              username={member.fields.Name}
              userRole={member.fields['User Role']}
              active={member.fields.Active}
            />
          ))}
      </div>

      <h1 className={styles.teamHeading}>Inactive</h1>

      <div className={styles.teamMembers}>
        {teamMembers
          .filter(member => !member.fields.Active)
          .sort((member1, member2) => (member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1))
          .map(member => (
            <TeamMember
              key={member.id}
              username={member.fields.Name}
              userRole={member.fields['User Role']}
              active={member.fields.Active}
            />
          ))}
      </div>
    </Layout>
  </>
);

export default Team;

export async function getStaticProps() {
  const teamMembers = await getTeamMembers();

  return {
    props: {
      teamMembers
    }
  };
}
