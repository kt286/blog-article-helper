// ==UserScript==
// @name         掘金文章助手
// @description  掘金文章直接跳转到原文，免得又是少图片 又是乱格式
// @author       Cloud
// @version      0.1
// @namespace    https://github.com/kt286/juejinHelper
// @homepageURL  https://github.com/kt286/juejinHelper
// @supportURL   https://github.com/kt286/juejinHelper/issues
// @include      https://juejin.im/
// @include      http://juejin.im/
// @match        https://juejin.im/entry/*
// @match        http://juejin.im/entry/*
// @updateURL    https://raw.githubusercontent.com/kt286/juejinHelper/master/juejinhelper.user.js
// @grant none
// ==/UserScript==

window.location.href=decodeURIComponent(document.querySelector(".originalUrl a").href.replace("https://link.juejin.im/?target=",""));
