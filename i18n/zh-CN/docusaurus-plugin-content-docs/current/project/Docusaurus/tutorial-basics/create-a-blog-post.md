---
sidebar_position: 3
---

# 创建博客文章

Docusaurus 为每篇博客文章创建了一个**页面**，还有一个**博客索引页面**，一个**标签系统**，以及一个**RSS**源...

## 创建你的第一篇文章

在 `blog/2021-02-28-greetings.md` 中创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: 问候！
authors:
  - name: Joel Marcey
    title: Docusaurus 1 的共同创作者
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus 维护者
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜，您已经发布了第一篇博客文章！

随意尽情编辑这篇文章，如您所愿。
```

现在可以在 [http://localhost:3000/blog/greetings] 查看新的博客文章。