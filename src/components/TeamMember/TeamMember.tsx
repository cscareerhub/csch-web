import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './TeamMember.module.scss';

interface TeamMemberProps {
  username: string;
  userRole: string;
  active: boolean;
  imageSrc?: string;
}

const TeamMember = (props: TeamMemberProps): ReactElement => {
  const { username, userRole, active, imageSrc } = props;
  return (
    <div className={classnames(styles.teamMember)}>
      <div className={styles.imageContainer}>
        {imageSrc && <img src={imageSrc} width={250} height={250} alt="CSCH team member profile" loading="lazy" />}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.username}>{username}</p>
        <p
          className={classnames(
            styles.userRole,
            userRole === 'Server Mod' && styles.mod,
            userRole === 'Head Server Mod' && styles.headMod
          )}
        >
          {userRole}
        </p>
        <div className={classnames(styles.statusCircle, !active && styles.inactive)} />
      </div>
    </div>
  );
};

TeamMember.defaultProps = {
  imageSrc: ''
};

export default TeamMember;
