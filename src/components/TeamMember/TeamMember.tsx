import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './TeamMember.module.scss';

interface TeamMemberProps {
  name: string;
  username: string;
  userRole: string;
  active: boolean;
}

const TeamMember = (props: TeamMemberProps): ReactElement => {
  const { name, username, userRole, active } = props;
  return (
    <div className={classnames(styles.teamMember)}>
      <p className={styles.name}>{name}</p>
      <p className={styles.username}>{username}</p>
      <p className={styles.userRole}>{userRole}</p>
      <div className={active ? 'active' : 'inactive'} />
    </div>
  );
};

export default TeamMember;
