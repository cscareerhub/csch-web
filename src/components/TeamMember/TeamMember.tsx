import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './TeamMember.module.scss';

interface TeamMemberProps {
  name: string;
  username: string;
  userRole: string;
  active: boolean;
  imageSrc?: string;
}

const TeamMember = (props: TeamMemberProps): ReactElement => {
  const { name, username, userRole, active, imageSrc } = props;
  return (
    <div className={classnames(styles.teamMember)}>
      <div className={styles.imageContainer}>
        {imageSrc && <img src={imageSrc} width={250} height={250} alt="CSCH team member profile" loading="lazy" />}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.username}>{username}</p>
        <p className={styles.userRole}>{userRole}</p>
        <div className={active ? 'active' : 'inactive'} />
      </div>
    </div>
  );
};

TeamMember.defaultProps = {
  imageSrc: ''
};

export default TeamMember;
