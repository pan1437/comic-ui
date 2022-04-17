import React from 'react';
import classNames from 'classnames';

export interface GroupProps extends BaseElementProps{
  children?: React.ReactNode;
}

const classPrefix = 'comic-btn-group'

const ButtonGroup: React.FC<GroupProps> = ({ children }) => {
  const classes = () => classNames(classPrefix,);

  return (
    <div className={classes()}>
      {children}
    </div>
  )
};

export default ButtonGroup;