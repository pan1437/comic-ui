/**
 * title: 基础用法
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
    <ScrapeCard>
      <span style={style}>恭喜你中了一等奖!</span>
    </ScrapeCard>
  </>
);
