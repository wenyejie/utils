"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./isNumber.cjs"),r=require("./isString.cjs"),s=/^\d+\.?/,t=e=>(r.isString(e)&&(e=+e),i.isNumber(e)?`${e}`.replace(s,"").length:(console.error(`"${e}" is not a number`),0));exports.decimalLength=t;exports.default=t;
