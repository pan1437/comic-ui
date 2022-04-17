
 import React from 'react';
 import { Button } from 'comic-ui';
 import 'comic-ui/es/button/style'; // 手动按需加载 less
 
 export default () => (
   <>
     <Button type="primary" disabled>Primary Button</Button>
     <Button type="success" disabled>Success Button</Button>
     <Button type="warning" disabled>Warning Button</Button>
     <Button type="danger" disabled>Danger Button</Button>
     <Button type="text" disabled>Text</Button>
     <Button type="link" disabled>Link</Button>
   </>
 );