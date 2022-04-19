import React from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';


export interface DividerProps extends BaseElementProps {
  /**
   * @description       水平还是垂直类型
   * @default           horizontal
   */
  type?: 'horizontal' | 'vertical';

  /**
   * @description       颜色
   * @default           
   */
  color?: string;
  

  /**
   * @description       嵌套文字
   * @default           
   */
  children?: React.ReactNode;

  /**
   * @description       嵌套文字方向
   * @default           center
   */
  position?: 'left' | 'center' | 'right';
}

const classPrefix = getClassPrefix('divider');

export const Divider: React.FC<DividerProps> = (props) => {
  const { children, color, className, style, position, type = 'horizontal', ...rest } = props;
  const classes = () => classNames(classPrefix, {
    [`${classPrefix}-${type}`]: true,
    [`${classPrefix}-with-text`]: type !== 'vertical' && children,
    [`${classPrefix}-with-text-${position}`]: type !== 'vertical' && position,
  },className);

  const dividerStyle: React.CSSProperties = {};
  if (color) {
    dividerStyle.borderColor = color
  }

  
  return (
    <div className={classes()} {...rest} style={{...dividerStyle, ...style}}>
      {children && (
        <span className={`${classPrefix}-inner-text`}>
          {children}
        </span>
      )}
  </div>
  )
};

Divider.propTypes = {
  type: t.oneOf(['horizontal', 'vertical']),
  color: t.string,
  children: t.node,
  position:t.oneOf(['left', 'center', 'right'])
};
