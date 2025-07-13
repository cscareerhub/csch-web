import ActionButton from '@components/ActionButton/ActionButton';
import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './InfoBox.module.scss';

interface InfoBoxProps {
  className: string;
  title: string;
  text: string;
  actionText: string;
  link: string;
}

const InfoBox = ({ className, actionText, title, text, link }: InfoBoxProps): ReactElement => (
    <div className={classnames(styles.infoBox, className)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <ActionButton className={styles.actionButton} actionText={actionText} link={link} />
    </div>
  );

export default InfoBox;
