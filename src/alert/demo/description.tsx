/**
 * title: 四种样式
 * desc: 颜色颜色type 分为四种  success、info、warning、error
 */

 import React from 'react';
 import { Alert } from 'comic-ui';
 import 'comic-ui/es/alert/style'; // 手动按需加载 less
 
 export default () => (
   <>
      <Alert message="神无" description="神乐化作风，得到了自由，而我，一无所有" />
      <Alert message="Info Text" type="info" />
   </>
 );