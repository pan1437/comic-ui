/**
 * title: 分栏偏移
 * desc: 可以通过设置offset属性 支持偏移指定的栏数。
 */


 import React from 'react';
 import { Row, Col } from 'comic-ui';
 import 'comic-ui/es/grid/style'; // 手动按需加载 less

 
 export default () => (
   <>
     <Row>
       <Col span={6} offset={6}>col-6</Col>
       <Col span={6} offset={6}>col-6</Col>
     </Row>

     <Row>
       <Col span={4} offset={12}>col-4</Col>
       <Col span={4}>col-4</Col>
       <Col span={4}>col-4</Col>
     </Row>
   </>
 );