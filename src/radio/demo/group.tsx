/**
 * title: 单选框组
 * desc: RadioGroup 可以指定options 或者插槽方式 实现单选框组 不建议两者混合使用
 */

import React, { useState } from 'react';
import { Radio, RadioGroup } from 'comic-ui';
import 'comic-ui/es/radio/style'; // 手动按需加载 less

export default () => {
  const [value, setValue] = useState<number | string>('xx');
  const [optionValue, setOptionValue] = useState<number | string>('xx');
  const options = [
    { label: '菠萝屋', value: 'bb' },
    { label: '香蕉房', value: 'xx' },
    { label: '辣椒房', value: 'jj' },
  ];
  const onChange = (val: string | number) => {
    setValue(val);
  };
  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio value="xx">蟹老板</Radio>
        <Radio value="pp">派大星</Radio>
        <Radio value="zz">章鱼哥</Radio>
      </RadioGroup>
      <RadioGroup value={optionValue} onChange={(val) => setOptionValue(val)} options={options} />
    </>
  );
};
