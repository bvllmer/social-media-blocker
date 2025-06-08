// ==UserScript==
// @name         Social Media Confirmation Prompt
// @namespace    https://bvllmer.github.io/To-Do-List/
// @version      1.1
// @description  Ask for confirmation before entering Instagram or Twitter
// @match        *://www.instagram.com/*
// @match        *://x.com/*
// @match        *://twitter.com/*
// @match        *://www.tiktok.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    if (!confirm("Are you sure you want to open this site?")) {
        if (window.history.length > 1) {
            history.back();
        } else if (document.referrer) {
            window.location.href = document.referrer;
        } else {
            window.location.href = "https://www.google.com";
        }
    }
})();
