import React from 'react';
import { Checkbox } from 'comic-ui';
import 'comic-ui/es/checkbox/style'; // 手动按需加载 less

export default () => (
  <>
    <Checkbox disabled>Checkbox</Checkbox>
    <Checkbox checked={true} disabled>
      Checkbox
    </Checkbox>
  </>
);
