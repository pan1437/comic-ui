import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import type { TransitionStatus } from 'react-transition-group';
import { Transition } from 'react-transition-group';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
import { Icon } from '../icons';

export interface AlertProps extends BaseElementProps {
  /**
   * @description       类型
   * @default            success
   */
  type?: 'success' | 'warning' | 'info' | 'error';

  /**
   * @description       提示内容
   * @default
   */
  message?: React.ReactNode;

  /**
   * @description       描述信息
   * @default
   */
  description?: React.ReactNode;

  /**
   * @description       是否显示关闭按钮
   * @default            false
   */
  closable?: boolean;

  /**
   * @description       是否需要滑动文字
   * @default            false
   */
  slideable?: boolean;

  /**
   * @description       关闭时触发的回调函数
   * @default
   */
  onClose?: (e: MouseEvent) => void;

  /**
   * @description       关闭延时
   * @default
   */
  duration?: number;
}

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: {},
};

const classPrefix = getClassPrefix('alert');

export const Alert: React.FC<AlertProps> = (props) => {
  const [currentStatus, setCurrentStatus] = useState(true);

  const {
    className,
    style,
    type = 'success',
    message,
    description,
    closable,
    onClose,
    slideable,
    duration = 300,
  } = props;

  const classes = () =>
    classNames(classPrefix, className, {
      [`${classPrefix}-${type}`]: type,
      [`${classPrefix}-nowrap`]: slideable,
    });

  const messageClasses = () =>
    classNames({
      [`${classPrefix}-message`]: true,
      [`${classPrefix}-message-title`]: description,
      [`${classPrefix}-slide`]: slideable && !description,
    });

  const onHandle = (e: MouseEvent) => {
    setCurrentStatus(false);
    onClose?.(e);
  };

  return (
    <Transition in={currentStatus} timeout={duration}>
      {(state) =>
        state !== 'exited' ? (
          <div
            className={classes()}
            style={{
              ...style,
              ...transitionStyles[state],
            }}
          >
            {message ? (
              <>
                <div className={messageClasses()}>{message}</div>
                {slideable && <div className={messageClasses()}>{message}</div>}
              </>
            ) : null}
            {closable ? <Icon type="clear" className="icon" onClick={onHandle} /> : null}
            {description ? <div className={`${classPrefix}-description`}>{description}</div> : null}
          </div>
        ) : null
      }
    </Transition>
  );
};

Alert.propTypes = {
  type: t.oneOf(['success', 'warning', 'info', 'error']),
  closable: t.bool,
  slideable: t.bool,
};
