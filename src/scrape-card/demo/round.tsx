/**
 * title: 画布圆角
 * desc: 通过round 属性可以指定画布圆角属性
 */

import React from 'react';
import { ScrapeCard } from 'comic-ui';
import 'comic-ui/es/scrape-card/style'; // 手动按需加载 less

const style: React.CSSProperties = {
  display: 'block',
  textAlign: 'center',
  paddingTop: 40,
};

export default () => (
  <>
    <ScrapeCard round>
      <span style={style}>(⊙o⊙) 谢谢惠顾</span>
    </ScrapeCard>
  </>
);
