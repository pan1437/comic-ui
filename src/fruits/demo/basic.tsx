/**
 * title: 基础用法
 * desc: 通过type 属性 指定水果类型
 */

import React from 'react';
import { Fruits } from 'comic-ui';
import 'comic-ui/es/fruits/style'; // 手动按需加载 less

export default () => (
  <>
    <Fruits />
    <Fruits type="avocado" width={50} height={60} />
    <Fruits type="lemon" width={55} height={55} />
    <Fruits type="pear" width={55} height={55} />
  </>
);
