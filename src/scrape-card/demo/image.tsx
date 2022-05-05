import React from 'react';
import { ScrapeCard } from 'comic-ui';
import 'comic-ui/es/scrape-card/style'; // 手动按需加载 less

export default () => (
  <>
    <ScrapeCard round width={400} height={300} color="darkseagreen">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.bugela.com%2Fuploads%2Fallimg%2F151031%2F1_151031220117_1.jpg&refer=http%3A%2F%2Fimg.bugela.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654346990&t=3515e4a7ad55a8ba682126eb58ce91bb" />
    </ScrapeCard>
  </>
);
