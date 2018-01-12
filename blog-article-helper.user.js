// ==UserScript==
// @name         blog-article-helper
// @description  博客文章直接跳转到来源地址、自动点击查看全文
// @author       Cloud
// @version      0.2
// @namespace    https://github.com/kt286/blog-article-helper
// @homepageURL  https://github.com/kt286/blog-article-helper
// @supportURL   https://github.com/kt286/blog-article-helper/issues
// @include      *://juejin.im/entry/*
// @include      *://blog.csdn.net/*/article/details/*
// @include      *://lib.csdn.net/article/*
// @updateURL    https://raw.githubusercontent.com/kt286/blog-article-helper/master/blog-article-helper.user.js
// @grant none
// ==/UserScript==
const host = location.hostname;

if (host.indexOf("juejin.im") != -1) {
    //掘金跳转到来源地址，免得又是少图片 又是乱格式
    window.location.href = decodeURIComponent(document.querySelector(".originalUrl a").href.replace("https://link.juejin.im/?target=", ""));
} else if (host.indexOf("blog.csdn.net") != -1) {
    window.onload = () => {
        document.querySelector(".read_more_btn").click(); //查看全文
    }
} else if (host.indexOf("lib.csdn.net") != -1) {
    window.onload = () => {
        document.querySelector(".pmores").click(); //查看全文
    }
}