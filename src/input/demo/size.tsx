/**
 * title: 自定义大小尺寸
 * desc: input可以通过设置size 属性实现不同大小的input 框 默认尺寸是middle
 */

 import React from 'react';
 import { Input } from 'comic-ui';
 import 'comic-ui/es/input/style'; // 手动按需加载 less
 
 export default () => (
   <>
      <Input placeholder="large" size="large" />
      <Input placeholder="middle" size="middle" />
      <Input placeholder="small" size="small" />
   </>
 );