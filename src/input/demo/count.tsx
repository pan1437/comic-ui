/**
 * title: 展示字数
 */

import React from 'react';
import { Input } from 'comic-ui';
import 'comic-ui/es/input/style'; // 手动按需加载 less

export default () => (
  <>
    <Input placeholder="请输入" showCount />
  </>
);
