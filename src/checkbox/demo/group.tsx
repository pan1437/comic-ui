import React, { useState } from 'react';
import { CheckboxGroup, Checkbox } from 'comic-ui';
import 'comic-ui/es/checkbox/style'; // 手动按需加载 less

export default () => {
  const [value, setValue] = useState<(number | string)[]>(['bbo']);
  const [optionValue, setOptionValue] = useState<(number | string)[]>(['yy']);
  const options = [
    { label: '海超人', value: 'hh' },
    { label: '大洋游侠', value: 'yy' },
    { label: '飞行荷兰人', value: 'ff' },
  ];
  return (
    <>
      <CheckboxGroup value={value} onChange={(val: (number | string)[]) => setValue(val)}>
        <Checkbox value="bbo">橡树玻璃屋</Checkbox>
        <Checkbox value="wwo">船锚屋</Checkbox>
        <Checkbox value="ssww">石像屋</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup
        value={optionValue}
        onChange={(val: (number | string)[]) => setOptionValue(val)}
        options={options}
      />
    </>
  );
};
