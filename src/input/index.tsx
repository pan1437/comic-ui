import type { ChangeEvent, KeyboardEvent, MouseEventHandler, FocusEvent } from 'react';
import { useRef } from 'react';
import React, { useState } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
import { Icon } from '../icons';

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
  type?: 'text' | 'password';

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
   * @description      点击清除图标删除内容
   * @default          false
   */
  allowClear?: boolean;

  /**
   * @description      自动补全
   * @default
   */
  autoComplete?: string;

  /**
   * @description     input值改变回调 (返回事件对象 非input框值)
   * @default
   */
  onChange?: (e: ChangeEvent) => void;

  /**
   * @description     键盘回车事件回调
   * @default
   */
  onSeach?: (e: KeyboardEvent) => void;

  /**
   * @description     输入框聚焦事件
   * @default
   */
  onFocus?: (e: FocusEvent<HTMLInputElement, Element>) => void;

  /**
   * @description     输入框失焦事件
   * @default
   */
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const classPrefix = getClassPrefix('input');
const classWrapperPrefix = getClassPrefix('input-affix-wrapper');

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    type = 'text',
    size,
    value = '',
    autoComplete,
    allowClear,
    onChange = () => {},
    onSeach = () => {},
    ...rest
  } = props;
  const [inputVal, setInputVal] = useState(value);
  const [focused, setFocused] = useState(false);
  const [inputType, setInputType] = useState(type);
  const ref = useRef<HTMLInputElement>(null);

  const wrapperClasses = () =>
    classNames(
      classWrapperPrefix,
      {
        [`${classWrapperPrefix}-focused`]: focused,
        [`${classWrapperPrefix}-${size}`]: !!size,
        [`${classWrapperPrefix}-disabled`]: rest.disabled,
        [`${classWrapperPrefix}-suffix`]: type === 'password' || allowClear,
      },
      className,
    );

  // input event callback
  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    onChange(e);
  };

  const autoCompleteAttr = () => (type === 'password' ? autoComplete || 'new-password' : void 0);

  // enter event
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && onSeach(e);
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (...args) => {
    if (rest.onFocus) {
      rest.onFocus(...args);
    }
    setFocused(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (...args) => {
    if (rest.onBlur) {
      rest.onBlur(...args);
    }
    setFocused(false);
  };

  const inputOnFocus = () => {
    ref.current?.focus();
    setTimeout(() => {
      ref.current!.selectionStart = inputVal.length;
      ref.current!.selectionEnd = inputVal.length;
    });
  };

  const iconClick = (e: MouseEventHandler<SVGSVGElement>, _type: 'text' | 'password') => {
    setInputType(_type);
    inputOnFocus();
  };

  return (
    <span className={wrapperClasses()}>
      <input
        ref={ref}
        className={classPrefix}
        value={inputVal}
        type={inputType}
        autoComplete={autoCompleteAttr()}
        {...rest}
        onChange={onChangeVal}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {allowClear && inputVal && (
        <Icon
          type="clear"
          className="icon"
          onClick={() => {
            setInputVal('');
            inputOnFocus();
          }}
        />
      )}
      {type === 'password' ? (
        inputType === 'password' ? (
          <Icon type="no-eye" className="icon" onClick={(e) => iconClick(e, 'text')} />
        ) : (
          <Icon type="eye" className="icon" onClick={(e) => iconClick(e, 'password')} />
        )
      ) : undefined}
    </span>
  );
};

Input.propTypes = {
  value: t.string,
  type: t.oneOf(['text', 'password']),
  placeholder: t.string,
  maxLength: t.number,
  name: t.string,
  readOnly: t.bool,
  disabled: t.bool,
  allowClear: t.bool,
  size: t.oneOf(['large', 'middle', 'small']),
};
