import React, { useState } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';

export interface InputBaseProps {
  value?: string;
  placeholder?: string;
  maxlength?: number;
}

export interface InputProps extends BaseElementProps {
  /**
   * @description     输入框的值
   * @default          
   */
  value?: string;

  /**
   * @description    原生-输入框类型
   * @default          
   */
  type?: string;

  /**
   * @description      原生-输入框占位文本
   * @default          
   */
  placeholder?: string;

  /**
   * @description      原生-最大输入长度
   * @default          
   */
  maxlength?: number;

  /**
   * @description      原生-最小输入长度
   * @default          
   */
  minlength?: number;

  /**
   * @description      原生
   * @default          
   */
  name?: string;

  /**
   * @description      原生- 是否只读
   * @default          
   */
  readonly?: boolean;

  /**
   * @description      尺寸
   * @default          middle
   */
   size?: 'large' | 'middle' | 'small';

  /**
   * @description     input值改变回调 (返回事件对象 非input框值) 
   * @default         
   */
   onChange?: (event: any) => void;
}

const classPrefix = getClassPrefix('input');

export const Input: React.FC<InputProps> = (props) => {
  const { className, style, size, value, onChange = () => {}, ...rest } = props;
  const classes = () => classNames(classPrefix, {
    [`${classPrefix}-${size}`]: !!size,
  },className);

  const [inputVal, setInputVal] = useState(value);

  // input event callback
  const onChangeVal = (e: { target: { value: React.SetStateAction<string | undefined> }}) => {
    setInputVal(e.target.value);
    onChange(e);
  }

  
  return (
    <input className={classes()} {...rest} value={inputVal} onChange={onChangeVal}></input>
  )
};

Input.propTypes = {
  value: t.string,
  type: t.string,
  placeholder: t.string,
  maxlength: t.number,
  minlength: t.number,
  name: t.string,
  readonly: t.bool,
  size: t.oneOf(['large', 'middle', 'small']),

};
