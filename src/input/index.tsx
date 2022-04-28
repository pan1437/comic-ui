import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';

export interface InputBaseProps {
  value?: string;
  placeholder?: string;
  maxLength?: number;
}

export interface InputProps extends BaseElementProps {
  /**
   * @description     输入框的值
   * @default
   */
  value?: string;

  /**
   * @description    输入框类型
   * @default
   */
  type?: string;

  /**
   * @description      输入框占位文本
   * @default
   */
  placeholder?: string;

  /**
   * @description      最大输入长度
   * @default
   */
  maxLength?: number;

  /**
   * @description      原生
   * @default
   */
  name?: string;

  /**
   * @description      是否只读
   * @default
   */
  readOnly?: boolean;

  /**
   * @description      禁用状态
   * @default
   */
  disabled?: boolean;

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

  autoComplete?: string;
}

const classPrefix = getClassPrefix('input');

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    type = 'text',
    style,
    size,
    value = '',
    autoComplete,
    onChange = () => {},
    ...rest
  } = props;
  const classes = () =>
    classNames(
      classPrefix,
      {
        [`${classPrefix}-${size}`]: !!size,
      },
      className,
    );

  const [inputVal, setInputVal] = useState(value);

  // input event callback
  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    onChange(e);
  };

  const autoCompleteAttr = () => (type === 'password' ? autoComplete || 'new-password' : void 0);

  return (
    <input
      className={classes()}
      value={inputVal}
      type={type}
      autoComplete={autoCompleteAttr()}
      onChange={onChangeVal}
      {...rest}
    />
  );
};

Input.propTypes = {
  value: t.string,
  type: t.string,
  placeholder: t.string,
  maxLength: t.number,
  name: t.string,
  readOnly: t.bool,
  disabled: t.bool,
  size: t.oneOf(['large', 'middle', 'small']),
};
