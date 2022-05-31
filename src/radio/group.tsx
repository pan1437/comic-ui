import type { ReactNode } from 'react';
import React from 'react';
import { RadioGroupContext } from './RadioGroupContext';
import t, { number, string } from 'prop-types';
import { getClassPrefix } from '../util/common';
import { Radio } from 'comic-ui';

export interface RadioGroupProps extends BaseElementProps {
  
  children?: ReactNode;
  /**
   * @description   用于设置当前选中的值
   * @default
   */
  value?: any;

  /**
   * @description   指定选项
   * @default            []
   */
   options?: Option [];

  /**
   * @description   选项变化时的回调函数
   * @default
   */
  onChange?: (value: any) => void;
}


const classPrefix = getClassPrefix('radio');

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { options = [] } = props;
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
      <div className={`${classPrefix}-group`}>
        { options.length ? options.map(item => (
          <Radio key={item.value} value={item.value} >{ item.label }</Radio>
        )) : props.children }
      </div>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.propTypes = {
  value: t.oneOfType([string, number]),
  options: t.array
};

export default RadioGroup;
