---
sidebar_position: 5
---

# 部署你的站点

Docusaurus 是一个 **静态站点生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将你的站点构建为简单的 **静态 HTML、JavaScript 和 CSS 文件**。

## 构建你的站点

为生产环境构建你的站点：

```bash
npm run build
```

静态文件将生成在 `build` 文件夹中。

## 部署你的站点

在本地测试你的生产构建：

```bash
npm run serve
```

现在，`build` 文件夹将在 [http://localhost:3000/](http://localhost:3000/) 上提供服务。

你现在可以轻松地将 `build` 文件夹部署到 **几乎任何地方**，**免费**或者非常小的成本（阅读 **[部署指南](https://docusaurus.io/docs/deployment)**）。
