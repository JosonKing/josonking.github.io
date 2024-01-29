---
sidebar_position: 1
---

# 介绍

让我们在不到 5 分钟内了解 **Docusaurus**。

## 入门指南

通过**创建一个新站点**开始。

或者通过 **[docusaurus.new](https://docusaurus.new)** 立即**尝试 Docusaurus**。

### 所需内容

- [Node.js](https://nodejs.org/en/download/) 版本需为 18.0 或以上：
  - 在安装 Node.js 时，建议勾选与依赖项相关的所有复选框。

## 生成新站点

使用**经典模板**生成新的 Docusaurus 站点。

在运行以下命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以在命令提示符、PowerShell、终端或您代码编辑器的任何集成终端中输入此命令。

该命令还会安装运行 Docusaurus 所需的所有必要依赖项。

## 启动您的站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令更改您正在使用的目录。为了使用您新创建的 Docusaurus 站点，您需要导航到终端。

`npm run start` 命令在本地构建您的网站，并通过开发服务器提供服务，您可以在 http://localhost:3000/ 上查看。

打开 `docs/intro.md`（此页面）并编辑一些行：站点会**自动重新加载**并显示您的更改。
