/**
 * title: 垂直排列
 * desc: 可以通过设置align属性 设置行内子元素的垂直排列方式
 */


 import React from 'react';
 import { Row, Col } from 'comic-ui';
 import 'comic-ui/es/grid/style'; // 手动按需加载 less

 const rowStyle = { height: 60 };
 
 export default () => (
   <>
     <Row align='top'>
       <Col span={12} style={rowStyle}>col-12</Col>
       <Col span={12}>col-12</Col>
     </Row>
     <Row align='middle'>
       <Col span={8} style={rowStyle}>8</Col>
       <Col span={8}>8</Col>
       <Col span={8}>8</Col>
     </Row>
     <Row align='bottom'>
       <Col span={8} style={rowStyle}>8</Col>
       <Col span={8}>8</Col>
       <Col span={8}>8</Col>
     </Row>
   </>
 );