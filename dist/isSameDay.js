!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("storm",[],e):"object"==typeof exports?exports.storm=e():t.storm=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return t[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(n,u,function(e){return t[e]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=53)}({0:function(t,e,r){"use strict";r.r(e),r.d(e,"isString",(function(){return n}));var n=function(t){return"string"==typeof t&&t.trim().length>0};e.default=n},1:function(t,e,r){"use strict";r.r(e),r.d(e,"isDate",(function(){return u}));var n=r(3),u=function(t){return"date"===Object(n.default)(t)&&"Invalid Date"!==t.toString()};e.default=u},3:function(t,e,r){"use strict";r.r(e),r.d(e,"toRawType",(function(){return u}));var n=r(5),u=function(t){return Object(n.default)(t).slice(8,-1).toLocaleLowerCase()};e.default=u},4:function(t,e,r){"use strict";r.r(e),r.d(e,"objectToString",(function(){return n}));var n=Object.prototype.toString;e.default=n},5:function(t,e,r){"use strict";r.r(e),r.d(e,"toTypeString",(function(){return u}));var n=r(4),u=function(t){return n.default.call(t).toLocaleLowerCase()};e.default=u},53:function(t,e,r){"use strict";r.r(e),r.d(e,"isSameDay",(function(){return o}));var n=r(8),u=r(1),o=function(t,e){return void 0===e&&(e=new Date),t=Object(n.default)(t),e=Object(n.default)(e),!(!Object(u.default)(t)||!Object(u.default)(e))&&t.toLocaleDateString()===e.toLocaleDateString()};e.default=o},6:function(t,e,r){"use strict";r.r(e),r.d(e,"isNumber",(function(){return n}));var n=function(t){return"number"==typeof t&&!Number.isNaN(t)};e.default=n},8:function(t,e,r){"use strict";r.r(e),r.d(e,"toDate",(function(){return i}));var n=r(1),u=r(6),o=r(0),i=function(t){if(Object(n.default)(t))return t;if(t){if(Object(o.default)(t)&&/^\d+$/.test(t)&&(t=Number.parseInt(t)),Object(u.default)(t)){var e=t+"";if(e.length>=8){if(t=e.length>13?Number.parseInt((t+"").substring(0,13)):e.padEnd(13,"0"),t=Object(o.default)(t)?Number.parseInt(t):t,Number.isNaN(t))return}else t=e}return"string"==typeof t&&/^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(t)&&(t=t.replace(/-/g,"/")),t=new Date(t),Object(n.default)(t)?t:void 0}};e.default=i}})}));