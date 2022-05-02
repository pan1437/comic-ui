/**
 * title: 垂直分割线
 * desc: 可以通过设置 type="vertical" 设置为行内的垂直分割线。
 */

import React from 'react';
import { Divider } from 'comic-ui';
import 'comic-ui/es/divider/style'; // 手动按需加载 less

export default () => (
  <>
    <span>海绵宝宝</span>
    <Divider type="vertical" />

    <span>派大星</span>
    <Divider type="vertical" />

    <span>章鱼哥</span>
    <Divider type="vertical" />
  </>
);
