"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./toDate.cjs"),u=require("./isDate.cjs");require("./isNumber.cjs");require("./isString.cjs");require("./regexp.cjs");require("./isInvalidDate.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");require("./isObject.cjs");require("./nullProtoObject.cjs");const t=(e,r)=>(e=i.toDate(e),r=i.toDate(r),!u.isDate(e)||!u.isDate(r)?(console.error(`"${e}" or "${r}" is not a valid date`),!1):e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth());exports.default=t;exports.isSameMonth=t;
