/**
 * title: 警告提示
 * desc: 适用于简短的警告提示
 */
import React from 'react';
import { Button, message } from 'comic-ui';
import 'comic-ui/es/button/style'; // 手动按需加载 less
import 'comic-ui/es/message/style'; // 手动按需加载 less

const info = () => {
  message.info('This is a info message');
};

export default () => (
  <>
    <Button type="primary" onClick={info}>Display normal message</Button>
  </>
);
