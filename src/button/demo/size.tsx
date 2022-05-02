import React from 'react';
import { Button } from 'comic-ui';
import 'comic-ui/es/button/style'; // 手动按需加载 less

export default () => (
  <>
    <Button type="primary" size="large">
      超大尺寸
    </Button>
    <Button type="primary" size="middle">
      中等尺寸
    </Button>
    <Button type="primary" size="small">
      迷你尺寸
    </Button>
  </>
);
