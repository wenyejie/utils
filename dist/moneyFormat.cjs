"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("./isNumber.cjs"),i=require("./toNumber.cjs"),a=require("./nullProtoObject.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");require("./isString.cjs");const c={decimal:2,symbol:"",default:"",split:",",length:3,padEnd:!0},l=(t,e)=>{if(e=Object.assign(a.nullProtoObject(),c,e),t=i.toNumber(t),!u.isNumber(t))return e.default;const r=t.toFixed(e.decimal).split(".");return!e.padEnd&&r[1]&&(r[1]=r[1].replace(/0+$/,"")),e.symbol+r[0].replace(new RegExp("\\B(?=(\\d{"+e.length+"})+(?!\\d))","g"),e.split)+(r[1]?"."+r[1]:"")};exports.default=l;exports.moneyFormat=l;