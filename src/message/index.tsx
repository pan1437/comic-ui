// import type { CSSProperties } from 'react';
import React from 'react';
// import type { TransitionStatus } from 'react-transition-group';
// import { Transition } from 'react-transition-group';
// import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
// import { Icon } from '../icons';

export interface MessageProps extends BaseElementProps {
  /**
   * @description       类型
   * @default            success
   */
  type?: 'success' | 'warning' | 'info' | 'error';
}

const classPrefix = getClassPrefix('message');

export const Message: React.FC<MessageProps> = (props) => {
  // const [currentStatus, setCurrentStatus] = useState(true);

  const {
    className,
    // style,
  } = props;

  const classes = () => classNames(classPrefix, className, {});

  return (
    <>
      <div className={classes()}>{'This is a normal message'}</div>
    </>
  );
};

Message.propTypes = {};
