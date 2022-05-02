/**
 * title: 按钮类型
 * desc: 按钮有六种类型：主按钮、成功按钮、警告按钮、危险按钮、文字按钮、链接按钮。另外可以通过round、plain设置按钮的圆角和镂空样式
 */

import React from 'react';
import { Button, Row } from 'comic-ui';
import 'comic-ui/es/button/style'; // 手动按需加载 less

export default () => (
  <>
    <Row>
      <Button type="primary">Primary Button</Button>
      <Button type="success">Success Button</Button>
      <Button type="warning">Warning Button</Button>
      <Button type="danger">Danger Button</Button>
    </Row>
    <Row>
      <Button type="primary" round>
        圆角按钮
      </Button>
      <Button type="success" round>
        圆角按钮
      </Button>
      <Button type="warning" round>
        圆角按钮
      </Button>
      <Button type="danger" round>
        圆角按钮
      </Button>
    </Row>
    <Row>
      <Button type="primary" plain>
        镂空按钮
      </Button>
      <Button type="success" plain>
        镂空按钮
      </Button>
      <Button type="warning" plain>
        镂空按钮
      </Button>
      <Button type="danger" plain>
        镂空按钮
      </Button>
    </Row>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
  </>
);
