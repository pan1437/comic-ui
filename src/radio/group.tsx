import React from 'react';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps extends BaseElementProps {
  /**
   * @description   用于设置当前选中的值
   * @default
   */
  value: string | number;

  /**
   * @description   选项变化时的回调函数
   * @default
   */
  onChange?: (value: string | number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const groupChange = (value: string) => {
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

export default RadioGroup;
