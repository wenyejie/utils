"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("./isObject.cjs");require("./toRawType.cjs");require("./decapitalize.cjs");const t=e=>r.isObject(e)?Object.keys(e).length:(console.error(`"${e}" is not a Object`),0);exports.default=t;exports.objectLength=t;
