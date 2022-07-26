/**
 * title: 图标
 * desc: 不同类型的alert 通过showIcon 可配有不同图标 也可以通过icon 自定义图标
 */

import React from 'react';
import { Alert } from 'comic-ui';
import 'comic-ui/es/alert/style'; // 手动按需加载 less

export default () => (
  <>
    <Alert message="Success Text" showIcon type="success" />
    <Alert message="Info Text" showIcon type="info" />
    <Alert message="Warning Text" showIcon type="warning" />
    <Alert message="Error Text" showIcon type="error" />
  </>
);
