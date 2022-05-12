import React from 'react';
import { Radio } from 'comic-ui';
import 'comic-ui/es/radio/style'; // 手动按需加载 less

export default () => (
  <>
    <Radio disabled>Disabled</Radio>
    <Radio disabled checked={true}>
      Disabled
    </Radio>
  </>
);
