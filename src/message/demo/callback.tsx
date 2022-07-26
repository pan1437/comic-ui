/**
 * title: 消失回调
 * desc: 
 */
 import React from 'react';
 import { Button, message } from 'comic-ui';
 import 'comic-ui/es/button/style'; // 手动按需加载 less
 import 'comic-ui/es/message/style'; // 手动按需加载 less
 
 const showMessage = () => {
   message.info({
     content: 'This is a info message',
     onClose: () => {
       alert('弹窗消失啦 >_<');
    }
   });
 };
 
 export default () => (
   <>
     <Button type="primary" onClick={showMessage}>
       message event
     </Button>
   </>
 );