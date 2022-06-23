/**
 * title: 四种样式
 * desc: 颜色颜色type 分为四种  success、info、warning、error
 */

import React from 'react';
import { Alert } from 'comic-ui';
import 'comic-ui/es/alert/style'; // 手动按需加载 less

export default () => (
  <>
    <Alert message="Success Text" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </>
);
