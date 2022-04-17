
import React from 'react';
import { Button, ButtonGroup, Row } from 'comic-ui';
import 'comic-ui/es/button/style'; // 手动按需加载 less

export default () => (
  <>
    <Row>
      <ButtonGroup>
        <Button type="primary">上一页</Button>
        <Button type="primary">上一页</Button>
      </ButtonGroup>
    </Row>
    <Row>
      <ButtonGroup>
        <Button type="danger">第一个</Button>
        <Button type="danger">第二个</Button>
        <Button type="danger">第三个</Button>
      </ButtonGroup>
    </Row>
  </>
);