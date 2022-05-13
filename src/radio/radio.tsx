// import { useRef } from 'react';
import React, { useContext, useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import classNames from 'classnames';
import type { RadioBaseElementProps } from './interface';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioProps extends RadioBaseElementProps {
  /**
   * @description      选择状态
   * @default          false
   */
  checked?: boolean;

  /**
   * @description      禁用状态
   * @default
   */
  disabled?: boolean;

  /**
   * @description      根据 value 进行比较，判断是否选中
   * @default
   */
  value?: any;

  /**
   * @description       slot
   * @default
   */
  children?: React.ReactNode;
}

const classPrefix = getClassPrefix('radio');

const Radio: React.FC<RadioProps> = (props) => {
  const { className, disabled, children, checked = false, value, ...rest } = props;

  const [currentChecked, setCurrentChecked] = useState(checked);
  const [focused, setFocused] = useState(false);
  const { value: groupValue, groupChange } = useContext(RadioGroupContext);

  useEffect(() => {
    setCurrentChecked(() => {
      return groupValue !== undefined ? groupValue === value : checked;
    });
  }, [checked, groupValue, value]);

  const classes = () =>
    classNames(
      {
        [`${classPrefix}-wrapper`]: true,
        [`${classPrefix}-checked`]: currentChecked,
        [`${classPrefix}-focused`]: focused,
        [`${classPrefix}-disabled`]: disabled,
      },
      className,
    );

  const onChangeVal = (e: ChangeEvent<HTMLInputElement>) => {
    groupChange?.(value);
    setCurrentChecked(e.target.checked);
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = (...args) => {
    props?.onFocus?.(...args);
    setFocused(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (...args) => {
    props?.onBlur?.(...args);
    setFocused(false);
  };

  return (
    <label className={classes()}>
      <input
        type="radio"
        disabled={disabled}
        className={classPrefix}
        onChange={onChangeVal}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        checked={currentChecked}
        {...rest}
      />
      <span className={`${classPrefix}-inner`} />
      <span>{children}</span>
    </label>
  );
};

Radio.propTypes = {
  disabled: t.bool,
  checked: t.bool,
  value: t.any
};

export default Radio;
