import React from 'react';
import { ScrapeCard } from 'comic-ui';
import 'comic-ui/es/scrape-card/style'; // 手动按需加载 less

export default () => (
  <>
    <ScrapeCard round width={400} height={300}>
      <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?undefined" />
    </ScrapeCard>
  </>
);
