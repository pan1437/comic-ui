/**
 * title: 文字标题
 * desc: 分割线中带有文字，可以用 position 指定文字位置。
 */

 import React from 'react';
 import { Divider} from 'comic-ui';
 import 'comic-ui/es/divider/style'; // 手动按需加载 less
 
 export default () => (
    <>
      <Divider>一级标题</Divider>
      <Divider color='indianred'>居中标题</Divider>
      <Divider color='plum' position='left'>左标题</Divider>
      <Divider color='cadetblue' position='right'>右标题</Divider>
    </>
 );