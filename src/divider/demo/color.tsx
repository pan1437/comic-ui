/**
 * title: 分割线颜色
 * desc: 通过color 属性 可以愉快的指定分割线的颜色
 */

import React from 'react';
import { Divider } from 'comic-ui';
import 'comic-ui/es/divider/style'; // 手动按需加载 less

export default () => (
  <>
    <Divider color="indianred" />
    <p>不管你是否愿意相信，在美丽的比基尼海滩，每个岩洞下面，都藏着一个奇迹</p>
    <Divider color="plum" />
    <p>如果你总是让人踩过你的头，你永远都不会得到你想要的东西</p>
    <Divider color="cadetblue" />
    <p>我要两个冰淇淋，一个给我吃一个给我的好朋友海绵宝宝。</p>
    <Divider color="deepskyblue" />
  </>
);
