"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("./isObject.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const i=(e,...u)=>{const r={};return c.isObject(e)&&u.forEach(t=>{r[t]=e[t]}),r};exports.default=i;exports.pick=i;
