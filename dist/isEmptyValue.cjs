"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./isArray.cjs"),i=require("./isObject.cjs"),u=require("./objectLength.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const r=e=>e==null||e===""||Number.isNaN(e)||t.isArray(e)&&e.length===0||i.isObject(e)&&u.objectLength(e)===0;exports.default=r;exports.isEmptyValue=r;