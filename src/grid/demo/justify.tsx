/**
 * title: 水平排列
 * desc: 可以通过设置justify属性 设置行内子元素的水平排列方式
 */

import React from 'react';
import { Row, Col } from 'comic-ui';
import 'comic-ui/es/grid/style'; // 手动按需加载 less

export default () => (
  <>
    <Row gutter={10} justify="start">
      <Col span={8}>
        <div>8</div>
      </Col>
      <Col span={8}>
        <div>8</div>
      </Col>
    </Row>
    <Row gutter={10} justify="end">
      <Col span={8}>
        <div>8</div>
      </Col>
      <Col span={8}>
        <div>8</div>
      </Col>
    </Row>

    <Row gutter={10} justify="center">
      <Col span={8}>
        <div>8</div>
      </Col>
      <Col span={8}>
        <div>8</div>
      </Col>
    </Row>
    <Row gutter={10} justify="space-around">
      <Col span={8}>
        <div>8</div>
      </Col>
      <Col span={8}>
        <div>8</div>
      </Col>
    </Row>
    <Row gutter={10} justify="space-between">
      <Col span={8}>
        <div>8</div>
      </Col>
      <Col span={8}>
        <div>8</div>
      </Col>
    </Row>
  </>
);
