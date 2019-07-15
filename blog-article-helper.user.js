// ==UserScript==
// @name         blog-article-helper
// @description  博客文章直接跳转到来源地址、自动点击查看全文
// @author       Cloud
// @version      0.6
// @namespace    https://github.com/kt286/blog-article-helper
// @homepageURL  https://github.com/kt286/blog-article-helper
// @supportURL   https://github.com/kt286/blog-article-helper/issues
// @include      *://juejin.im/entry/*
// @include      *://blog.csdn.net/*/article/details/*
// @include      *://lib.csdn.net/article/*
// @include      *://*.inoreader.com/*
// @include      *://www.jianshu.com/p/*
// @updateURL    https://raw.githubusercontent.com/kt286/blog-article-helper/master/blog-article-helper.user.js
// @grant none
// ==/UserScript==
const host = location.hostname;

if (host.indexOf("juejin.im") != -1) {
    document.querySelector(".originalUrl a").href.replace("https://link.juejin.im/?target=", "");
} else if (host.indexOf("blog.csdn.net") != -1) {
    window.onload = () => {
        csdn.copyright.init("", "", ""); //去除剪贴板劫持
        document.querySelector("#btn-readmore").click(); //查看全文
    }
} else if (host.indexOf("lib.csdn.net") != -1) {
    window.onload = () => {
        document.querySelector(".pmores").click(); //查看全文
    }
} else if (host.indexOf("inoreader.com") != -1) {
    var meta = document.createElement('meta');
    meta.name = "referrer";
    meta.content = "no-referrer";
    document.getElementsByTagName('head')[0].appendChild(meta);
} else if (host.indexOf("jianshu.com") != -1) {
    window.onload = () => {
        M.copyright.config.minLength = 1000000; //去除剪贴板劫持
    }
}
