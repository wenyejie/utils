!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("storm",[],e):"object"==typeof exports?exports.storm=e():t.storm=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=47)}({2:function(t,e,r){"use strict";r.r(e),r.d(e,"toRawType",(function(){return o}));var n=r(5),o=function(t){return Object(n.default)(t).slice(8,-1).toLocaleLowerCase()};e.default=o},3:function(t,e,r){"use strict";r.r(e),r.d(e,"objectToString",(function(){return n}));var n=Object.prototype.toString;e.default=n},47:function(t,e,r){"use strict";r.r(e),r.d(e,"isPlainObject",(function(){return o}));var n=r(2),o=function(t){return"object"===Object(n.default)(t)};e.default=o},5:function(t,e,r){"use strict";r.r(e),r.d(e,"toTypeString",(function(){return o}));var n=r(3),o=function(t){return n.default.call(t).toLocaleLowerCase()};e.default=o}})}));