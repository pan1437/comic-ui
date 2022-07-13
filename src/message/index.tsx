// import type { CSSProperties } from 'react';
import React, { useState } from 'react';
// import type { TransitionStatus } from 'react-transition-group';
// import { Transition } from 'react-transition-group';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
import { Icon } from '../icons';

export interface MessageProps extends BaseElementProps {
  /**
   * @description       类型
   * @default            success
   */
  type?: 'success' | 'warning' | 'info' | 'error';
}

const classPrefix = getClassPrefix('message');

const colorObj = {
  success: '#1db440',
  warning: '#fae13c',
  info: '#57a9fb',
  error: '#f54e4e',
}

export const Message: React.FC<MessageProps> = (props) => {
  const {
    className,
    type = 'success'
  } = props;


  const classes = () => classNames(classPrefix, className, {
    [`${classPrefix}-${type}`]: type,
  });

  return (
    <>
      <div className={classes()}><Icon type={type} className={`${classPrefix}-icon`} color={colorObj[type] }/>{'This is a normal message'}</div>
    </>
  );
};

Message.propTypes = {
  type: t.oneOf(['success', 'warning', 'info', 'error']),
};
