import React from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';


export interface InputProps extends BaseElementProps {
  /**
   * @description       水平还是垂直类型
   * @default           horizontal
   */
   placeholder?: 'horizontal' | 'vertical';
}

const classPrefix = getClassPrefix('input');

export const Input: React.FC<InputProps> = (props) => {
  const { className, style, ...rest } = props;
  const classes = () => classNames(classPrefix, {
    // [`${classPrefix}-${type}`]: true,
    // [`${classPrefix}-with-text`]: type !== 'vertical' && children,
    // [`${classPrefix}-with-text-${position}`]: type !== 'vertical' && position,
  },className);

  
  return (
    <input className={classes()} {...rest} ></input>
  )
};

Input.propTypes = {
  // type: t.oneOf(['horizontal', 'vertical']),
  // color: t.string,
  // children: t.node,
  // position:t.oneOf(['left', 'center', 'right'])
};
