"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./isString.cjs"),i=require("./isInteger.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const r=e=>(i.isInteger(e)&&(e+=""),t.isString(e)?e.replace(/(\d{3})\d*(\d{4})/,"$1****$2"):"");exports.default=r;exports.phoneNumFormat=r;
