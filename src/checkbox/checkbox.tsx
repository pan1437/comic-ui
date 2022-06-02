import React, { useState, useEffect, useContext } from 'react';
import type { ChangeEvent } from 'react';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import classNames from 'classnames';

export interface RadioProps extends BaseElementProps {
  /**
   * @description      选择状态
   * @default          false
   */
  checked?: boolean;

  /**
   * @description      选中的值
   * @default
   */
  value?: string | number;

  /**
   * @description      禁用状态
   * @default
   */
  disabled?: boolean;

  /**
   * @description       slot
   * @default
   */
  children?: React.ReactNode;
}

const classPrefix = getClassPrefix('checkbox');

const Checkbox: React.FC<RadioProps> = (props) => {
  const { className, disabled, children, checked = false, value, ...rest } = props;

  const [currentChecked, setCurrentChecked] = useState(checked);
  const [focused, setFocused] = useState(false);

  const { value: groupValue = [], groupChange } = useContext(CheckboxGroupContext);

  useEffect(() => {
    setCurrentChecked(() => {
      return groupValue !== undefined ? groupValue.includes(value) : checked;
    });
  }, []);

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
    const currentVal = e.target.value;
    const valueArr = groupValue;
    if (e.target.checked) {
      !valueArr.includes(currentVal) && valueArr.push(e.target.value);
    } else {
      const nowIndex = valueArr.findIndex((item) => item === currentVal);
      nowIndex !== -1 && valueArr.splice(nowIndex, 1);
    }
    groupChange?.(valueArr);
    setCurrentChecked(e.target.checked);
  };

  const onFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    setFocused(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setFocused(false);
  };

  return (
    <label className={classes()}>
      <input
        type="checkbox"
        disabled={disabled}
        className={classPrefix}
        onChange={onChangeVal}
        onFocus={onFocus}
        onBlur={onBlur}
        checked={currentChecked}
        value={value}
        {...rest}
      />
      <span className={`${classPrefix}-inner`} />
      <span>{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  disabled: t.bool,
  checked: t.bool,
  value: t.any,
};

export default Checkbox;
