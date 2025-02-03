// ==UserScript==
// @name        Screen Resolution Spoof
// @namespace   r-a-y/browser/screen
// @description Alters attempts at fingerprinting your screen resolution to 1920x1080. Only tested in FIrefox.
// @include     *
// @version     1.1.4
// @grant       none
// @run-at      document-start
// ==/UserScript==

Object.defineProperty(window.screen, "width", { get: function() { return 384; } });
Object.defineProperty(window.screen, "height", { get: function() { return 832; } });
Object.defineProperty(window.screen, "availWidth", { get: function() { return 384; } });
Object.defineProperty(window.screen, "availHeight", { get: function() { return 832; } });
Object.defineProperty(window, "innerWidth", { get: function() { return 384; } });
Object.defineProperty(window, "innerHeight", { get: function() { return 696; } });
Object.defineProperty(window, "outerWidth", { get: function() { return 384; } });
Object.defineProperty(window, "outerHeight", { get: function() { return 696; } });
Object.defineProperty(window, "devicePixelRatio", { get: function(){return 2.8125; }});