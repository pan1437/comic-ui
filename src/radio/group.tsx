import React, { ReactNode } from 'react';
import { RadioGroupContext } from './RadioGroupContext';
import t, { number, string } from 'prop-types';

export interface RadioGroupProps extends BaseElementProps {
  children: ReactNode;
  /**
   * @description   用于设置当前选中的值
   * @default
   */
  value?: any;

  /**
   * @description   选项变化时的回调函数
   * @default
   */
  onChange?: (value: any) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const groupChange = (value?: any) => {
    props.onChange?.(value);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value: props.value,
        groupChange,
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  value: t.oneOfType([string, number])
};

export default RadioGroup;
