import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './TeamMember.module.scss';

interface TeamMemberProps {
  username: string;
  userRole: string;
  image: string;
  active: boolean;
}

const TeamMember = (props: TeamMemberProps): ReactElement => {
  const { username, userRole, image, active } = props;

  return (
    <div className={classnames(styles.teamMember)}>
      <div className={styles.imageContainer}>
        <img
          src={image || 'https://cscareerhub.com/csch-statico.png'}
          width={200}
          height={200}
          alt="CSCH logo"
          loading="lazy"
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.username}>{username}</p>
        <p
          className={classnames(
            styles.userRole,
            userRole === 'Server Mod' && styles.mod,
            userRole === 'Senior Server Mod' && styles.seniorMod,
            userRole === 'Server Contributor' && styles.contributor
          )}
        >
          {userRole}
        </p>
        <div className={classnames(styles.statusCircle, !active && styles.inactive)} />
      </div>
    </div>
  );
};

export default TeamMember;
