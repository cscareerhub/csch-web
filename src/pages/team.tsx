import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import TeamMember from '@components/TeamMember/TeamMember';
import getTeamMembers from 'src/lib/getTeamMembers';
import styles from './team.module.scss';

const Team = ({ teamMembers }): ReactElement => (
  <>
    <HeadComponent title="Team" />
    <Layout hideTopButton deprecatedLayout>
      <div className={styles.teamPageWrapper}>
        <h1 className={styles.teamHeading}>The CS Career Hub Team</h1>

        <div className={styles.teamMembers}>
          {teamMembers
            .filter(member => member.fields.Active)
            .filter(member => member.fields['User Role'].includes('CEO') || member.fields['User Role'].includes('COO'))
            .sort((member1, member2) =>
              member1.fields['User Role'].toLowerCase() > member2.fields['User Role'].toLowerCase() ? 1 : -1
            )
            .map(member => (
              <TeamMember
                key={member.id}
                username={member.fields.Name}
                userRole={member.fields['User Role']}
                image={member.fields.Image ? member.fields.Image[0]?.url : null}
                active={member.fields.Active}
              />
            ))}

          {teamMembers
            .filter(member => member.fields.Active)
            .filter(
              member => member.fields['User Role'].includes('Lead') || member.fields['User Role'].includes('Director')
            )
            .sort((member1, member2) =>
              member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1
            )
            .map(member => (
              <TeamMember
                key={member.id}
                username={member.fields.Name}
                userRole={member.fields['User Role']}
                image={member.fields.Image ? member.fields.Image[0]?.url : null}
                active={member.fields.Active}
              />
            ))}
        </div>

        <h1 className={styles.teamHeading}>Server Moderators</h1>

        <p className={styles.teamDescription}>
          Our moderators often double as full community managers. They not only help keep the community in order and
          provide support to members, but also brainstorm ideas, execute initiatives to improve the community, and
          contribute greatly to events and projects.
        </p>

        <div className={styles.teamMembers}>
          {teamMembers
            .filter(member => member.fields.Active)
            .filter(member => member.fields['User Role'].includes('Server Mod'))
            .sort((member1, member2) =>
              member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1
            )
            .map(member => (
              <TeamMember
                key={member.id}
                username={member.fields.Name}
                userRole={member.fields['User Role']}
                image={member.fields.Image ? member.fields.Image[0]?.url : null}
                active={member.fields.Active}
              />
            ))}
        </div>

        <h1 className={styles.teamHeading}>Project Contributors</h1>

        <p className={styles.teamDescription}>
          Contributors lend a helping hand wherever necessary and have made many of our events, development projects,
          and community intiatives possible!
        </p>

        <div className={styles.teamMembers}>
          {teamMembers
            .filter(member => member.fields.Active)
            .filter(member => member.fields['User Role'].includes('Contributor'))
            .sort((member1, member2) =>
              member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1
            )
            .map(member => (
              <TeamMember
                key={member.id}
                username={member.fields.Name}
                userRole={member.fields['User Role']}
                image={member.fields.Image ? member.fields.Image[0]?.url : null}
                active={member.fields.Active}
              />
            ))}
        </div>

        <h1 className={styles.teamHeading}>Hall of Fame</h1>

        <p className={styles.teamDescription}>
          A section to honor those who are no longer an active part of the CSCH staff, but have made great contributions
          to the community.
        </p>

        <div className={styles.teamMembers}>
          {teamMembers
            .filter(member => !member.fields.Active)
            .sort((member1, member2) =>
              member1.fields.Name.toLowerCase() > member2.fields.Name.toLowerCase() ? 1 : -1
            )
            .map(member => (
              <TeamMember
                key={member.id}
                username={member.fields.Name}
                userRole={member.fields['User Role']}
                image={member.fields.Image ? member.fields.Image[0]?.url : null}
                active={member.fields.Active}
              />
            ))}
        </div>
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
