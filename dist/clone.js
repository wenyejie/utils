!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("storm",[],t):"object"==typeof exports?exports.storm=t():e.storm=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}({16:function(e,t,r){"use strict";r.r(t),r.d(t,"isPrimitive",(function(){return n}));var n=function(e){var t=typeof e;return"string"===t||"number"===t||"boolean"===t||"bigint"===t||"symbol"===t||null==e};t.default=n},30:function(e,t,r){"use strict";r.r(t),r.d(t,"clone",(function(){return u}));var n=r(16),o=r(7),u=function(e,t,r){if(void 0===t&&(t=!0),void 0===r&&(r=new WeakMap),Object(n.default)(e))return e;if(r.get(e))return r.get(e);var i=Object(o.default)(e)?[]:{};r.set(e,i);for(var f,c=Object.keys(e),a=0,l=c.length;a<l;a++)i[f=c[a]]=t?u(e[f],t,r):e[f];return i};t.default=u},7:function(e,t,r){"use strict";r.r(t),r.d(t,"isArray",(function(){return n}));var n=Array.isArray;t.default=n}})}));