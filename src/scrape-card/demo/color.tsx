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
    <ScrapeCard round color="powderblue">
      <span style={style}>比基尼海滩</span>
    </ScrapeCard>
    <ScrapeCard round color="peachpuff">
      <span style={style}>船锚屋</span>
    </ScrapeCard>
    <ScrapeCard round color="lightpink">
      <span style={style}>蟹堡王</span>
    </ScrapeCard>
  </>
);
