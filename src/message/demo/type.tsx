/**
 * title: 提示类型
 * desc: 包括成功、失败、警告
 */
 import React from 'react';
 import { Button, message } from 'comic-ui';
 import 'comic-ui/es/button/style'; // 手动按需加载 less
 import 'comic-ui/es/message/style'; // 手动按需加载 less
 
 const success = () => {
   message.success({
     content: 'This is a success message'
   });
 };

 const warning = () => {
  message.warning({
    content: 'This is a warning message'
  });
};

const error = () => {
  message.error({
    content: 'This is a error message'
  });
};
 
 export default () => (
   <>
     <Button type="success" onClick={success}>
      success message
     </Button>
     <Button type="warning" onClick={warning}>
      warning message
     </Button>
     <Button type="danger" onClick={error}>
       error message
     </Button>
   </>
 );