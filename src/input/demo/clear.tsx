/**
 * title: 带移除图标
 * desc: 带移除图标的输入框，点击图标删除所有内容。
 */

 import React from 'react';
 import { Input} from 'comic-ui';
 import 'comic-ui/es/input/style'; // 手动按需加载 less
 
 export default () => (
   <>
     <Input allowClear />
   </>
 );