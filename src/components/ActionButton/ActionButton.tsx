import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
  actionText: string;
  className?: string;
  color?: string;
  link: string;
}

const ActionButton = (props: ActionButtonProps): ReactElement => {
  const { actionText, className, color, link } = props;

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={classnames(styles.actionButton, className)} style={{ backgroundColor: color }} type="button">
        {actionText}
      </button>
    </a>
  );
};

ActionButton.defaultProps = {
  className: '',
  color: null
};

export default ActionButton;
