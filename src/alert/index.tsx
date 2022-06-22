import React, { useState } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
import { Icon } from '../icons';

export interface AlertProps extends BaseElementProps {

  /**
   * @description       类型
   * @default            apple
   */
  type?: 'success'| 'warning' | 'info' | 'error';

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
   * @description       关闭时触发的回调函数
   * @default            false
   */
  onClose?: (e: MouseEvent) => void



}

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
    onClose
  } = props;

  const classes = () =>
    classNames(classPrefix, className, {
      [`${classPrefix}-${type}`]: type,
    });

  const messageClasses = () =>
  classNames({
    [`${classPrefix}-message`]: true,
    [`${classPrefix}-message-title`]: description,
  });

  const onHandle = (e: MouseEvent) => {
    setCurrentStatus(false);
    onClose?.(e);
  }




  return (
    <>
      { currentStatus ? <div className={classes()} style={style} >
        { message ? <div className={messageClasses()} >{message}</div> : null }
        {/* { closable ? <Icon
          type="clear"
          className="icon"
          onClick={onHandle}
        /> : null} */}
        { description ? <div className={`${classPrefix}-description`}>{description}</div> : null}
      </div> : null }
    </>
  );
};

Alert.propTypes = {
  type: t.oneOf(['success', 'warning', 'info', 'error']),
  closable: t.bool,
};
