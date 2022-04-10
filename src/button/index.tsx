import React from 'react';
import t from 'prop-types';

export interface ButtonProps {
  /**
   * @description       Button 的类型
   * @default           'default'
   */
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  children?: React.ReactNode;
}
const classPrefix = 'comic-btn'

const Button: React.FC<ButtonProps> = ({ children, type = 'default', ...rest }) => (
  <button
    className={`${classPrefix} ${classPrefix}-${type}`}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: t.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default'])
};

export default Button;