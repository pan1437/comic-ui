/**
 * title: 自动换行
 * desc: 可以通过设置wrap属性 设置flex布局下是否需要自动换行
 */

import React from 'react';
import { Row, Col } from 'comic-ui';
import 'comic-ui/es/grid/style'; // 手动按需加载 less

export default () => (
  <>
    <Row wrap={false}>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>

    <Row wrap>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
  </>
);
