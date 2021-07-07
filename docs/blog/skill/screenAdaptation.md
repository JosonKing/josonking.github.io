---
title: 屏幕适配方案
order: 33
toc: menu
nav:
  title: 博客
  order: 3
---

# 屏幕适配方案

```JavaScript
(function () {
  // 在标准 1920px 适配下，100px = 1rem;
  var baseFontSize = 100
  var baseWidth = 1920

  var set = function () {
    var clientWidth = document.documentElement.clientWidth || window.innerWidth

    var rem = 100
    if (clientWidth != baseWidth) {
      rem = Math.floor(clientWidth / baseWidth * baseFontSize)
      if (rem < 80) {
        rem = 80
      }
    }

    document.querySelector('html').style.fontSize = rem + 'px'
    document.querySelector('body').style.fontSize = '0.16rem'
  }
  set()
  window.addEventListener('resize', set)
}());
```
