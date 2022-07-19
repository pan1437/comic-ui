// import type { CSSProperties } from 'react';
import type { CSSProperties } from 'react';
import React, { useEffect, useState } from 'react';
// import type { TransitionStatus } from 'react-transition-group';
// import { Transition } from 'react-transition-group';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import type { TransitionStatus } from 'react-transition-group';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';
import { Icon } from '../icons';

export interface MessageProps extends BaseElementProps {
  /**
   * @description       类型
   * @default            success
   */
  type?: 'success' | 'warning' | 'info' | 'error';

  /**
   * @description       类型
   * @default            success
   */
  content?: React.ReactNode;

  duration?: number;

  exitedCallback: () => void;
}

const classPrefix = getClassPrefix('message');

const colorObj = {
  success: '#1db440',
  warning: '#fae13c',
  info: '#57a9fb',
  error: '#f54e4e',
};

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1, transform: 'translateY(0%)' },
  entered: { opacity: 1, transform: 'translateY(0)' },
  exiting: { opacity: 0, transform: 'translateY(-10px)' },
  exited: { opacity: 0, transform: 'translateY(-10px)' },
  unmounted: {},
};

export const Message: React.FC<MessageProps> = (props) => {
  const { className, type = 'success', content } = props;

  const [currentStatus, setCurrentStatus] = useState(false);

  useEffect(() => {
    setCurrentStatus(true);
    const timer = setTimeout(setCurrentStatus.bind(null, false), props.duration || 3000);
    return () => clearTimeout(timer);
  }, [props.duration]);

  const exited = () => {
    props.exitedCallback?.();
  };

  const classes = () =>
    classNames(classPrefix, className, {
      [`${classPrefix}-${type}`]: type,
    });

  return (
    <>
      <Transition in={currentStatus} timeout={300} onExited={exited}>
        {(state) => (
          <div
            className={classes()}
            style={{
              ...transitionStyles[state],
            }}
          >
            <Icon type={type} className={`${classPrefix}-icon`} color={colorObj[type]} />
            {content}
          </div>
        )}
      </Transition>
    </>
  );
};

Message.propTypes = {
  type: t.oneOf(['success', 'warning', 'info', 'error']),
};
