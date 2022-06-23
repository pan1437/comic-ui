/**
 * title: 描述内容
 * desc: 含有辅助性文字介绍的警告提示
 */

import React from 'react';
import { Alert } from 'comic-ui';
import 'comic-ui/es/alert/style'; // 手动按需加载 less

export default () => (
  <>
    <Alert message="神无" description="神乐化作风，得到了自由，而我，一无所有" closable />
    <Alert
      message="想象力"
      type="info"
      description="在艺术虚构里，即使最简单的虚构，也是凭借想象，来把孤立的事实加以联系，加以补充，加以美化"
      closable
    />
  </>
);
