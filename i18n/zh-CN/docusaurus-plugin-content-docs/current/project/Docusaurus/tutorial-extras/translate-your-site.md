---
sidebar_position: 2
---

# 翻译您的网站

让我们将 `docs/intro.md` 翻译成法语。

## 配置 i18n

修改 `docusaurus.config.js` 以添加对 `fr` 区域的支持：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

在法语中翻译 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md`。

## 启动本地化站点

以法语区域启动您的站点：

```bash
npm run start -- --locale fr
```

您的本地化站点可以通过 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，并且 `Getting Started` 页面已经被翻译。

:::caution

在开发中，您一次只能使用一个区域。

:::

## 添加区域下拉菜单

为了在不同语言之间无缝切换，添加一个区域下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

区域下拉菜单现在出现在您的导航栏中：

![Locale Dropdown](./img/localeDropdown.png)

## 构建本地化站点

为特定区域构建您的站点：

```bash
npm run build -- --locale fr
```

或者一次构建站点以包含所有区域：

```bash
npm run build
```
