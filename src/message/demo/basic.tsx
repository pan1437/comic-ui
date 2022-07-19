/**
 * title: 警告提示
 * desc: 适用于简短的警告提示
 */
import React from 'react';
import { Button, message } from 'comic-ui';
import 'comic-ui/es/button/style'; // 手动按需加载 less
import 'comic-ui/es/message/style'; // 手动按需加载 less

const call = () => {
  const type: ['success', 'info', 'error', 'warning'] = ['success', 'info', 'error', 'warning'];
  // message.info({
  //   content: 'This is a info message'
  // });
  const callType = type[Math.floor(Math.random() * 4)];
  message[callType]({
    content: `This is a ${callType} message`,
  });
};

export default () => (
  <>
    <Button type="primary" onClick={call}>
      Display normal message
    </Button>
  </>
);
