/**
 * title: 相关的原生属性
 */

import React from 'react';
import { Input } from 'comic-ui';
import 'comic-ui/es/input/style'; // 手动按需加载 less

export default () => (
  <>
    <Input placeholder="maxLength 为 10" maxLength={10} />
    <Input placeholder="readOnly" readOnly value="喵喵喵" />
    <Input placeholder="event" onChange={(e: any) => console.log('input event callback ', e)} />
    <Input placeholder="event" onSeach={(e: any) => console.log('enter event callback ', e)} />
  </>
);
