!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("storm",[],e):"object"==typeof exports?exports.storm=e():t.storm=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=37)}({0:function(t,e,n){"use strict";n.r(e),n.d(e,"isString",(function(){return r}));var r=function(t){return"string"==typeof t&&t.trim().length>0};e.default=r},1:function(t,e,n){"use strict";n.r(e),n.d(e,"isDate",(function(){return u}));var r=n(3),u=function(t){return"date"===Object(r.default)(t)&&"Invalid Date"!==t.toString()};e.default=u},3:function(t,e,n){"use strict";n.r(e),n.d(e,"toRawType",(function(){return u}));var r=n(5),u=function(t){return Object(r.default)(t).slice(8,-1).toLocaleLowerCase()};e.default=u},37:function(t,e,n){"use strict";n.r(e),n.d(e,"getDaysByMonth",(function(){return o}));var r=n(8),u=n(1),o=function(t){return t=Object(r.default)(t),Object(u.default)(t)?new Date(t.getFullYear(),t.getMonth()+1,0).getDate():(console.warn("参数错误",t),0)};e.default=o},4:function(t,e,n){"use strict";n.r(e),n.d(e,"objectToString",(function(){return r}));var r=Object.prototype.toString;e.default=r},5:function(t,e,n){"use strict";n.r(e),n.d(e,"toTypeString",(function(){return u}));var r=n(4),u=function(t){return r.default.call(t).toLocaleLowerCase()};e.default=u},6:function(t,e,n){"use strict";n.r(e),n.d(e,"isNumber",(function(){return r}));var r=function(t){return"number"==typeof t&&!Number.isNaN(t)};e.default=r},8:function(t,e,n){"use strict";n.r(e),n.d(e,"toDate",(function(){return i}));var r=n(1),u=n(6),o=n(0),i=function(t){if(Object(r.default)(t))return t;if(t){if(Object(o.default)(t)&&/^\d+$/.test(t)&&(t=Number.parseInt(t)),Object(u.default)(t)){var e=t+"";if(e.length>=8){if(t=e.length>13?Number.parseInt((t+"").substring(0,13)):e.padEnd(13,"0"),t=Object(o.default)(t)?Number.parseInt(t):t,Number.isNaN(t))return}else t=e}return"string"==typeof t&&/^\d{4}.\d{1,2}.\d{1,2}\s+(\d{1,2}.)*\d{1,2}?$/.test(t)&&(t=t.replace(/-/g,"/")),t=new Date(t),Object(r.default)(t)?t:void 0}};e.default=i}})}));