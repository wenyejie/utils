"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("./isObject.cjs"),o=require("./arrFindItemByProp.cjs");require("./toRawType.cjs");require("./toTypeString.cjs");require("./objectToString.cjs");require("./decapitalize.cjs");const u=(s,e,i,t)=>{let r;return n.isObject(e)?(r=e,t=i):r={[e]:i},o.arrFindItemByProp(s,r)?.[t]};exports.arrFindValByProp=u;exports.default=u;
