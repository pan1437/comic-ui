/**
 * title: 文字滑动
 * desc: slideable 属性可以让文字有滑动效果 但是只适用于message 不适用description
 */

 import React from 'react';
 import { Alert } from 'comic-ui';
 import 'comic-ui/es/alert/style'; // 手动按需加载 less
 
 export default () => (
   <>
     <Alert message="最公平的是时间，最偏心的也是时光，每个人都拥有同样的24小时，最后却活成了不同的样子" slideable />
   </>
 );
 