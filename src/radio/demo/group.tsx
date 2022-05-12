import React, { useState } from 'react';
import { Radio, RadioGroup } from 'comic-ui';
import 'comic-ui/es/radio/style'; // 手动按需加载 less

export default () => {
  const [value, setValue] = useState<number | string>('x');
  const onChange = (val: string | number) => {
    setValue(val);
  };
  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio value="x">蟹老板</Radio>
        <Radio value="p">派大星</Radio>
        <Radio value="z">章鱼哥</Radio>
      </RadioGroup>
    </>
  );
};
