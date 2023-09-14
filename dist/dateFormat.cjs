"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./toDate.cjs"),r=require("./padStart.cjs");require("./isDate.cjs");require("./isNumber.cjs");require("./isString.cjs");require("./regexp.cjs");require("./isInvalidDate.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");require("./isObject.cjs");require("./nullProtoObject.cjs");require("./isUndefined.cjs");const a=(t,s="YYYY-MM-DD hh:mm:ss",u="")=>{const e=i.toDate(t);return e?s.replace(/YY(YY)?|MM?|DD?|hh?|mm?|ss?|SS?S?/g,n=>{switch(n){case"YYYY":return e.getFullYear()+"";case"YY":return e.getFullYear()%100+"";case"MM":return r.padStart(e.getMonth()+1);case"M":return e.getMonth()+1+"";case"DD":return r.padStart(e.getDate());case"D":return e.getDate()+"";case"hh":return r.padStart(e.getHours());case"h":return e.getHours()+"";case"mm":return r.padStart(e.getMinutes());case"m":return e.getMinutes()+"";case"ss":return r.padStart(e.getSeconds());case"s":return e.getSeconds()+"";case"SSS":return r.padStart(e.getMilliseconds(),3);case"SS":return r.padStart(Math.floor(e.getMilliseconds()/10));case"S":return Math.floor(e.getMilliseconds()/100)+""}}):(console.error(`"${t}" is not valid date`),u)};exports.dateFormat=a;exports.default=a;
