import React, { ReactElement } from 'react';
import HeadComponent from '@components/Head';
import Layout from '@components/Layout';
import TeamMember from '@components/TeamMember/TeamMember';
import styles from './team.module.scss';

// TODO: Pull data from Discord API instead
const teamMembers = [
  { id: 1, username: 'Kevin', userRole: 'Server Owner', active: true },
  {
    id: 2,
    username: 'Brenda',
    userRole: 'Server Partner, Lead Developer',
    active: true,
    imageSrc: '/images/team/brenda.gif'
  },
  { id: 3, username: 'Nik', userRole: 'Server Admin, Bot Developer', active: true, imageSrc: '/images/team/nik.png' },
  { id: 4, username: 'Peter', userRole: 'Server Admin', active: true },
  { id: 5, username: 'iNirvana', userRole: 'Header Server Mod', active: true, imageSrc: '/images/team/inirvana.png' },
  { id: 6, username: 'Gopher', userRole: 'Head Server Mod', active: true, imageSrc: '/images/team/gopher.png' },
  { id: 7, username: 'Jeremy', userRole: 'Head Server Mod', active: true, imageSrc: '/images/team/jeremy.png' },
  { id: 8, username: 'Wickler', userRole: 'Head Server Mod', active: true, imageSrc: '/images/team/wickler.png' },
  { id: 9, username: 'bofh', userRole: 'Server Mod', active: true, imageSrc: '/images/team/bofh.png' },
  {
    id: 10,
    username: 'CS_Enthusiast',
    userRole: 'Server Mod',
    active: true,
    imageSrc: '/images/team/enthusiast.png'
  },
  { id: 11, username: 'Edin', userRole: 'Server Mod', active: true, imageSrc: '/images/team/edin.png' },
  { id: 12, username: 'ender', userRole: 'Server Mod', active: true, imageSrc: '/images/team/ender.png' },
  { id: 13, username: 'ff', userRole: 'Server Mod', active: true, imageSrc: '/images/team/ff.png' },
  { id: 14, username: 'Manny', userRole: 'Server Mod', active: true, imageSrc: '/images/team/manny.png' },
  { id: 15, username: 'middleagedman', userRole: 'Server Mod', active: true, imageSrc: '/images/team/sam.png' },
  { id: 16, username: 'The Coconut Meme', userRole: 'Server Mod', active: true, imageSrc: '/images/team/coconut.png' },
  { id: 17, username: 'vcarl', userRole: 'Server Mod', active: true, imageSrc: '/images/team/vcarl.png' },
  { id: 18, username: 'Whiplash', userRole: 'Server Mod', active: true, imageSrc: '/images/team/whiplash.png' },
  { id: 19, username: 'Morgos', userRole: 'Server Owner', active: false, imageSrc: '/images/team/john.png' },
  { id: 20, username: 'asyncawait', userRole: 'Server Admin', active: false, imageSrc: '/images/team/async.png' },
  { id: 21, username: 'enufstuff', userRole: 'Server Admin', active: false },
  { id: 22, username: 'mauri', userRole: 'Server Admin', active: false, imageSrc: '/images/team/mauri.png' },
  { id: 23, username: 'veremit', userRole: 'Server Admin', active: false, imageSrc: '/images/team/veremit.png' },
  { id: 24, username: 'amicus_elit', userRole: 'Server Mod', active: false, imageSrc: '/images/team/amicus.png' },
  { id: 25, username: 'csgator', userRole: 'Server Mod', active: false },
  { id: 26, username: 'KensoDev', userRole: 'Server Mod', active: false, imageSrc: '/images/team/kenso.png' },
  { id: 27, username: 'Kireinai_Asrai', userRole: 'Server Mod', active: false, imageSrc: '/images/team/kireinai.png' },
  { id: 28, username: 'LtHummus', userRole: 'Server Mod', active: false, imageSrc: '/images/team/lthummus.png' },
  { id: 29, username: 'NixiePixel', userRole: 'Server Mod', active: false, imageSrc: '/images/team/nixiepixel.png' },
  { id: 30, username: 'OGArist0tle', userRole: 'Server Mod', active: false, imageSrc: '/images/team/ogarist0tle.png' },
  { id: 31, username: 'TamasHenning', userRole: 'Server Mod', active: false, imageSrc: '/images/team/tamas.png' }
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
              username={member.username}
              userRole={member.userRole}
              active={member.active}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </Layout>
    </div>
  </>
);

export default Team;
