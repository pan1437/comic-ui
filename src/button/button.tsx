import React from 'react';
import t from 'prop-types';
import classNames from 'classnames';
import { getClassPrefix } from '../util/common';

// 1.0.0 版本暂不支持button 其他原生属性
export interface ButtonProps extends BaseElementProps {
  /**
   * @description       类型
   * @default           default
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default' | 'text' | 'link';

  /**
   * @description       尺寸大小
   * @default           middle
   */
  size?: 'large' | 'middle' | 'small';

  children?: React.ReactNode;

  /**
   * @description       按钮失效状态
   * @default   false
   */
  disabled?: boolean;

  /**
   * @description       镂空按钮
   * @default   false
   */
  plain?: boolean;

  /**
   * @description       是否为圆角按钮
   * @default   false
   */
  round?: boolean;

  /**
   * @description       点击事件回调
   */
  onClick?: (event: any) => void;
}
const classPrefix = getClassPrefix('btn');

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = 'default', plain, size, round, className, ...rest } = props;
  const classes = () =>
    classNames(
      classPrefix,
      {
        [`${classPrefix}-${type}`]: true,
        [`${classPrefix}-${size}`]: !!size,
        ['is-plain']: plain,
        ['is-round']: round,
      },
      className,
    );

  return (
    <button className={classes()} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: t.oneOf(['primary', 'success', 'warning', 'danger', 'default', 'text', 'link']),
  disabled: t.bool,
  round: t.bool,
  plain: t.bool,
  size: t.oneOf(['large', 'middle', 'small']),
};

export default Button;
