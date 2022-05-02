/**
 * title: 栅格间隔
 * desc: 栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性 设置水平行距。
 */

import React from 'react';
import { Row, Col } from 'comic-ui';
import 'comic-ui/es/grid/style'; // 手动按需加载 less

export default () => (
  <>
    <Row gutter={10}>
      <Col span={12}>
        <div>col-12</div>
      </Col>
      <Col span={12}>
        <div>col-12</div>
      </Col>
    </Row>
    <Row gutter={20}>
      <Col span={8}>
        <div>col-8</div>
      </Col>
      <Col span={8}>
        <div>col-8</div>
      </Col>
      <Col span={8}>
        <div>col-8</div>
      </Col>
    </Row>
  </>
);
