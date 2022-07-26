/**
 * title: 警告提示
 * desc: 适用于简短的警告提示
 */
 import React from 'react';
 import { Button, message } from 'comic-ui';
 import 'comic-ui/es/button/style'; // 手动按需加载 less
 import 'comic-ui/es/message/style'; // 手动按需加载 less
 
 const showMessage = (time: number) => {
   message.info({
     content: `This is a ${time} info message`,
     duration: time,
   });
 };
 
 export default () => (
   <>
      <Button type="primary" onClick={() => showMessage(3000)}>
       3000ms message
     </Button>
     <Button type="primary" onClick={() => showMessage(10000)}>
      10000ms message
     </Button>
   </>
 );
 