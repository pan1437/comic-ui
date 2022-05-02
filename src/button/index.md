---
title: Button 按钮
nav:
  path: /components
  title: 组件
  order: 2
group:
  title: Basic
  order: 1
---

# Button 按钮

###### 按钮用于开始一个即时操作。

## 何时使用

###### 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

1. Comic UI 中我们提供了六种类型按钮：
   - 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
   - 成功按钮：常用于成功之类的操作。
   - 警告按钮：常用于弹出告警信息。
   - 危险按钮：常用于删除操作 需要二次确认。
   - 文字按钮：朴素的文字按钮。
   - 链接按钮：通常用于跳转链接使用。

## 基础用法

<code src="./demo/basic.tsx"></code>

## 禁用状态

###### 按钮不可用状态

<code src="./demo/disabled.tsx"></code>

## 按钮尺寸

###### Comic 组件提供除了默认值以外的三种尺寸

<code src="./demo/size.tsx"></code>

## 按钮组

###### 以按钮组的方式出现，常用于多项类似操作

<code src="./demo/group.tsx"></code>

<API src="./button.tsx"></API>
