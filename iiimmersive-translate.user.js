// ==UserScript==
// @name         Screen Resolution Spoof (Chrome Compatible)
// @namespace    r-a-y/browser/screen
// @description  Fake screen resolution for fingerprinting protection (Works in Chrome & Firefox)
// @include      *
// @version      1.2.0
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const targetWidth = 384;
    const targetHeight = 832;
    const targetInnerWidth = 384;
    const targetInnerHeight = 696;
    const devicePixelRatioValue = 2.8125;

    const screenProxy = new Proxy(window.screen, {
        get(target, property) {
            if (property === 'width') return targetWidth;
            if (property === 'height') return targetHeight;
            if (property === 'availWidth') return targetWidth;
            if (property === 'availHeight') return targetHeight;
            return Reflect.get(target, property);
        }
    });

    Object.defineProperty(window, "screen", {
        get: function() { return screenProxy; },
        configurable: false
    });

    Object.defineProperty(window, "innerWidth", {
        get: function() { return targetInnerWidth; },
        configurable: false
    });

    Object.defineProperty(window, "innerHeight", {
        get: function() { return targetInnerHeight; },
        configurable: false
    });

    Object.defineProperty(window, "outerWidth", {
        get: function() { return targetInnerWidth; },
        configurable: false
    });

    Object.defineProperty(window, "outerHeight", {
        get: function() { return targetInnerHeight; },
        configurable: false
    });

    Object.defineProperty(window, "devicePixelRatio", {
        get: function() { return devicePixelRatioValue; },
        configurable: false
    });

})();