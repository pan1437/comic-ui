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
   * @description       文字滑动速度(单位为秒)
   * @default               30s
   */
  slideTime?: number;

  /**
   * @description       关闭时触发的回调函数
   * @default
   */
  onClose?: (e: MouseEvent) => void;
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
    slideTime = 30,
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

  // slide-time
  const messageSlideStyle: React.CSSProperties = {};
  if (slideable && !description) {
    messageSlideStyle.animationDuration = `${slideTime}s`;
  }

  const onHandle = (e: MouseEvent) => {
    setCurrentStatus(false);
    onClose?.(e);
  };

  return (
    <>
      {currentStatus ? (
        <Transition in={currentStatus} timeout={300}>
          {(state) => (
            <div
              className={classes()}
              style={{
                ...style,
                ...transitionStyles[state],
              }}
            >
              {message ? (
                <>
                  <div className={messageClasses()} style={messageSlideStyle}>
                    {message}
                  </div>
                  {slideable && (
                    <div className={messageClasses()} style={messageSlideStyle}>
                      {message}
                    </div>
                  )}
                </>
              ) : null}
              {closable ? <Icon type="clear" className="icon" onClick={onHandle} /> : null}
              {description ? (
                <div className={`${classPrefix}-description`}>{description}</div>
              ) : null}
            </div>
          )}
        </Transition>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  type: t.oneOf(['success', 'warning', 'info', 'error']),
  closable: t.bool,
  slideable: t.bool,
  slideTime: t.number,
};
