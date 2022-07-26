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
   * @description       是否显示图标
   * @default               false
   */
  showIcon?: boolean;

  /**
   * @description       自定义图标
   * @default
   */
  icon?: React.ReactNode;

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

const colorObj = {
  success: '#1db440',
  warning: '#fae13c',
  info: '#57a9fb',
  error: '#f54e4e',
};

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
    showIcon = false,
    slideTime = 30,
    icon,
  } = props;

  const classes = () =>
    classNames(classPrefix, className, {
      [`${classPrefix}-${type}`]: type,
      [`${classPrefix}-nowrap`]: slideable,
    });

  const messageClasses = () =>
    classNames({
      [`${classPrefix}-title`]: description,
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

  const preFixIcon = () =>
    showIcon && ['success', 'warning', 'info', 'error'].includes(type)
      ? icon || <Icon type={type} className="prefix-icon" color={colorObj[type]} width={ description ? 22 : 18} height={ description ? 22 : 18 } />
      : null;

  const content = () => (
    <div className={`${classPrefix}-content`}>
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
      {description ? <div className={`${classPrefix}-description`}>{description}</div> : null}
    </div>
  );

  const suffixIcon = () =>
    closable ? <Icon type="noBorderClear" className="clear-icon" onClick={onHandle} /> : null;

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
              {preFixIcon()}
              {content()}
              {suffixIcon()}
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
  showIcon: t.bool,
};
