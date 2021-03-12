import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import TeamMember from '@components/TeamMember/TeamMember';
import styles from './team.module.scss';

// TODO: Pull data from Discord API instead
const teamMembers = [
  { id: 1, name: 'Kevin', username: 'Kevin', userRole: 'Server Owner', active: true },
  { id: 2, name: 'Brenda', username: 'Brenda', userRole: 'Server Partner & Lead Developer', active: true },
  { id: 3, name: 'Nik', username: 'Nik', userRole: 'Server Admin & Bot Developer', active: true },
  { id: 3, name: 'Peter', username: 'Peter', userRole: 'Server Admin', active: true },
  { id: 4, name: 'Bri', username: 'iNirvana', userRole: 'Header Serv Mod', active: true },
  { id: 5, username: 'Gopher', userRole: 'Head Server Mod', active: true },
  { id: 6, username: 'Jeremy', userRole: 'Head Server Mod', active: true },
  { id: 7, username: 'Wickler', userRole: 'Head Server Mod', active: true },
  { id: 8, username: 'CS_Career_Enthusiast', userRole: 'Server Mod', active: true },
  { id: 9, username: 'Edin', userRole: 'Server Mod', active: true },
  { id: 10, username: 'Manny', userRole: 'Server Mod', active: true },
  { id: 11, username: 'live', userRole: 'Server Mod', active: true },
  { id: 12, username: 'The Coconut Meme', userRole: 'Server Mod', active: true },
  { id: 13, username: 'Whiplash', userRole: 'Server Mod', active: true },
  { id: 14, name: 'John', username: 'Morgos', userRole: 'Server Owner', active: false },
  { id: 15, username: 'asyncawait', userRole: 'Server Admin', active: false },
  { id: 16, username: 'enufstuff', userRole: 'Server Admin', active: false },
  { id: 17, username: 'mauri', userRole: 'Server Admin', active: false },
  { id: 18, username: 'veremit', userRole: 'Server Admin', active: false },
  { id: 19, username: 'amicus_elit', userRole: 'Server Mod', active: false },
  { id: 20, username: 'csgator', userRole: 'Server Mod', active: false },
  { id: 21, username: 'KensoDev', userRole: 'Server Mod', active: false },
  { id: 22, username: 'Kireinai_Asrai', userRole: 'Server Mod', active: false },
  { id: 23, username: 'LtHummus', userRole: 'Server Mod', active: false },
  { id: 24, username: 'NixiePixel', userRole: 'Server Mod', active: false },
  { id: 25, username: 'OGArist0tle', userRole: 'Server Mod', active: false },
  { id: 26, username: 'TamasHenning', userRole: 'Server Mod', active: false }
];

const Team = (): ReactElement => (
  <>
    <HeadComponent title="CS Career Hub | Home" />
    <div className="home-container">
      <Layout>
        <div className={styles.teamMembers}>
          {teamMembers.map(member => (
            <TeamMember
              key={member.id}
              name={member?.name}
              username={member?.username}
              userRole={member.userRole}
              active={member.active}
            />
          ))}
        </div>
      </Layout>
    </div>
  </>
);

export default Team;
