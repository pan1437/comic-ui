/**
 * title: 相关的原生属性
 */

import React from 'react';
import { Input} from 'comic-ui';
import 'comic-ui/es/input/style'; // 手动按需加载 less

export default () => (
  <>
    <Input placeholder="请输入内容" maxlength={10} />
    <Input placeholder="这只能只读哦" readOnly value="喵喵喵"/>
    <Input placeholder="请输入内容" onChange={(e) => console.log('input event callback ', e)} />
  </>
);