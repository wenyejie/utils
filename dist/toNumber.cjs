"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./isNumber.cjs"),s=require("./isString.cjs"),r=(e,t=0)=>(s.isString(e)&&(e=Number.parseFloat(e)),i.isNumber(e)?e:t);exports.default=r;exports.toNumber=r;
