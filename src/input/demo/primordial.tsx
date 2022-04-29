/**
 * title: 相关的原生属性
 */

import React from 'react';
import { Input} from 'comic-ui';
import 'comic-ui/es/input/style'; // 手动按需加载 less

export default () => (
  <>
    <Input placeholder="maxLength" maxLength={10} />
    <Input readOnly value="only read"/>
    <Input placeholder="change event" onChange={(e) => console.log('input event callback ', e)} />
    <Input placeholder="enter event" onSeach={(e) => console.log('enter event callback ', e)} />
  </>
);