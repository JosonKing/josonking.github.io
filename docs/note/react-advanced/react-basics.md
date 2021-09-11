---
title: React基础
order: 81
toc: menu
nav:
  title: 笔记
  order: 2
---

# React 基础

## 1. 历史背景及特性

简单功能易出现 bug

- 传统 DOM API 需要关注太多细节：局部刷新 -- React：整体刷新
- 传统 MVC 操作关系混乱 -- Flux 架构：单向数据流（Redux， Mobx）

## 2. 使用组件构建 UI

props + state => View

1. 组件一般不提供方法，而是某种状态机
2. 纯函数
3. 单项数据绑定
