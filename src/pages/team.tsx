import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import TeamMember from '@components/TeamMember/TeamMember';
import getTeamMembers from 'src/lib/getTeamMembers';
import styles from './team.module.scss';

// // TODO: Pull data from Discord API instead
// const teamMembers = [
//   { id: 1, username: 'Kevin', userRole: 'Server Owner', active: true },
//   { id: 2, username: 'Brenda', userRole: 'Server Partner, Lead Developer', active: true },
//   { id: 3, username: 'Nik', userRole: 'Server Admin, Bot Developer', active: true },
//   { id: 4, username: 'Peter', userRole: 'Server Admin', active: true },
//   { id: 5, username: 'iNirvana', userRole: 'Head Server Mod', active: true },
//   { id: 6, username: 'Gopher', userRole: 'Head Server Mod', active: true },
//   { id: 7, username: 'Jeremy', userRole: 'Head Server Mod', active: true },
//   { id: 8, username: 'Wickler', userRole: 'Head Server Mod', active: true },
//   { id: 9, username: 'bofh', userRole: 'Server Mod', active: true },
//   { id: 10, username: 'CS_Enthusiast', userRole: 'Server Mod', active: true },
//   { id: 11, username: 'Edin', userRole: 'Server Mod', active: true },
//   { id: 12, username: 'ender', userRole: 'Server Mod', active: true },
//   { id: 13, username: 'ff', userRole: 'Server Mod', active: true },
//   { id: 14, username: 'Manny', userRole: 'Server Mod', active: true },
//   { id: 15, username: 'middleagedman', userRole: 'Server Mod', active: true },
//   { id: 16, username: 'The Coconut Meme', userRole: 'Server Mod', active: true },
//   { id: 17, username: 'vcarl', userRole: 'Server Mod', active: true },
//   { id: 18, username: 'Whiplash', userRole: 'Server Mod', active: true },
//   { id: 19, username: 'Morgos', userRole: 'Server Owner', active: false },
//   { id: 20, username: 'asyncawait', userRole: 'Server Admin', active: false },
//   { id: 21, username: 'enufstuff', userRole: 'Server Admin', active: false },
//   { id: 22, username: 'mauri', userRole: 'Server Admin', active: false },
//   { id: 23, username: 'veremit', userRole: 'Server Admin', active: false },
//   { id: 24, username: 'amicus_elit', userRole: 'Server Mod', active: false },
//   { id: 25, username: 'csgator', userRole: 'Server Mod', active: false },
//   { id: 26, username: 'KensoDev', userRole: 'Server Mod', active: false },
//   { id: 27, username: 'Kireinai_Asrai', userRole: 'Server Mod', active: false },
//   { id: 28, username: 'LtHummus', userRole: 'Server Mod', active: false },
//   { id: 29, username: 'NixiePixel', userRole: 'Server Mod', active: false },
//   { id: 30, username: 'OGArist0tle', userRole: 'Server Mod', active: false },
//   { id: 31, username: 'TamasHenning', userRole: 'Server Mod', active: false }
// ];

const Team = ({ teamMembers }): ReactElement => (
  <>
    <HeadComponent title="Team" />
    <div>
      <Layout>
        <div className={styles.teamMembers}>
          {teamMembers.map(member => (
            <TeamMember
              key={member.id}
              username={member.fields.Name}
              userRole={member.fields['User Role']}
              active={member.Active}
            />
          ))}
        </div>
      </Layout>
    </div>
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
