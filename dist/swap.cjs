"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("./hasOwn.cjs");require("./hasOwnProperty.cjs");require("./isUndefined.cjs");require("./isNull.cjs");const s=(e,r,t)=>{if(!u.hasOwn(e,r)||!u.hasOwn(e,t))return e;const n=e[r];return e[r]=e[t],e[t]=n,e};exports.default=s;exports.swap=s;