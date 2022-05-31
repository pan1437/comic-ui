import React from 'react';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import t from 'prop-types';
import { getClassPrefix } from '../util/common';
import { Checkbox } from 'comic-ui';

export interface CheckboxGroupProps extends BaseElementProps {

  /**
   * @description       slot
   * @default
   */
  children?: React.ReactNode;

  /**
   * @description   用于设置当前选中的值
   * @default
   */
  value?: (string | number)[];

  /**
   * @description   指定选项
   * @default            []
   */
   options?: Option [];

  /**
   * @description   选项变化时的回调函数
   * @default
   */
  onChange?: (value: (string | number)[]) => void;
}


const classPrefix = getClassPrefix('checkbox');

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { children, options = [] } = props;
  const groupChange = (value?: any) => {
    props.onChange?.(value);
  };
  return (
    <CheckboxGroupContext.Provider
      value={{
        value: props.value,
        groupChange,
      }}
    >
      <div className={`${classPrefix}-group`}>
        { options.length ? options.map(item => (
          <Checkbox key={item.value} value={item.value} >{ item.label }</Checkbox>
        )) : children }
      </div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.propTypes = {
  value: t.array,
  options: t.array
};

export default CheckboxGroup;
