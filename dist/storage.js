!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("storm",[],t):"object"==typeof exports?exports.storm=t():n.storm=t()}(window,(function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=69)}({14:function(n,t,e){"use strict";e.r(t),e.d(t,"emptyObject",(function(){return r}));var r=Object.freeze({});t.default=r},20:function(n,t,e){"use strict";e.r(t),e.d(t,"inBrowser",(function(){return r})),e.d(t,"useragent",(function(){return o})),e.d(t,"isAndroid",(function(){return u})),e.d(t,"isEdge",(function(){return i})),e.d(t,"isChrome",(function(){return c})),e.d(t,"isFirefox",(function(){return s})),e.d(t,"isIE",(function(){return f})),e.d(t,"isIE9",(function(){return d})),e.d(t,"isIOS",(function(){return a})),e.d(t,"isIPad",(function(){return l})),e.d(t,"isIPhone",(function(){return p})),e.d(t,"isMobile",(function(){return m})),e.d(t,"isPC",(function(){return y})),e.d(t,"isPhantom",(function(){return g})),e.d(t,"isWeChat",(function(){return b})),e.d(t,"isWindows",(function(){return h})),e.d(t,"isMac",(function(){return w})),e.d(t,"isUbuntu",(function(){return v})),e.d(t,"isLinux",(function(){return j}));var r=function(){return"undefined"!=typeof window},o=function(){return r()?window.navigator.userAgent.toLocaleLowerCase():""},u=function(){return o().includes("android")},i=function(){return o().includes("edge")},c=function(){return/chrome\/\d+/.test(o())&&!i()},s=function(){return/firefox\/(\d+)/.test(o())},f=function(){return/msie|trident/.test(o())},d=function(){return o().includes("msie 9.0")},a=function(){return/iphone|ipad|ipod|ios/.test(o())},l=function(){return o().includes("ipad")},p=function(){return o().includes("iphone")},m=function(){return o().includes("mobile")},y=function(){return!m()},g=function(){return/phantomjs/.test(o())},b=function(){return o().includes("micromessenger")},h=function(){return o().includes("windows")},w=function(){return o().includes("macintosh")},v=function(){return o().includes("ubuntu")},j=function(){return o().includes("linux")&&!v()&&!u()}},69:function(n,t,e){"use strict";e.r(t),e.d(t,"parse",(function(){return i})),e.d(t,"localCustomStorage",(function(){return s})),e.d(t,"sessionCustomStorage",(function(){return f})),e.d(t,"session",(function(){return a})),e.d(t,"local",(function(){return l}));var r,o=e(20),u=e(14);!function(n){n.local="local",n.session="session"}(r||(r={}));var i=function(n){return(JSON.parse(n)||u.default).v},c=function(){function n(n){this.storage=Object(o.inBrowser)()?window[n+"Storage"]:u.default}return n.prototype.get=function(n){var t;try{t=i(this.storage.getItem(n))}catch(n){throw new Error(n)}return t},n.prototype.set=function(n,t){try{this.storage.setItem(n,JSON.stringify({v:t}))}catch(n){throw new Error(n)}},n.prototype.remove=function(n){this.storage.removeItem(n)},n.prototype.clear=function(){this.storage.clear()},n.prototype.key=function(n){return i(this.storage.key(n))},n.prototype.length=function(){return this.storage.length},n}(),s=new c(r.local),f=new c(r.session),d=function(n){return function(t,e){if(t)switch(e){case void 0:return n.get(t);case null:n.remove(t);break;default:n.set(t,e)}}},a=d(f),l=d(s)}})}));