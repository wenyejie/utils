"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./isString.cjs"),i=require("./removeSpace.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const r=e=>t.isString(e)?i.removeSpace(e).replace(/(\d{4}(?=\d))/g,"$1 "):"";exports.bankCardFormat=r;exports.default=r;