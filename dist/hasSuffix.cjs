"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./isString.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const r=e=>i.isString(e)?/\.\w+$/.test(e):(console.error(new TypeError(`"${e}" is not a string`)),!1);exports.default=r;exports.hasSuffix=r;