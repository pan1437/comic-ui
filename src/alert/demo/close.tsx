/**
 * title: 关闭警告提示
 * desc: 通过 closable 属性 可以点击图标关闭当前警告提示
 */

import React from 'react';
import { Alert } from 'comic-ui';
import 'comic-ui/es/alert/style'; // 手动按需加载 less

export default () => {
  const onClose = (e: MouseEvent) => {
    console.log(e, 'Message is turned off');
  };
  return (
    <>
      <Alert
        message="This is a message you can choose to close the current message"
        closable
        onClose={onClose}
      />
    </>
  );
};
